#!/usr/bin/env node
'use strict'

const mri = require('mri')

const encode = require('.')
const pkg = require('./package.json')

const argv = mri(process.argv.slice(2), {
	boolean: [
		'help', 'h',
		'version', 'v',
		'url-encoded', 'u'
	]
})

if (argv.help || argv.h) {
	process.stdout.write(`
Usage:
    as-data-uri [--url-encoded] [--mime mime-type] [--charset utf8]

Options:
    --url-encoded  -u  Url-encode instead of base64.
    --mime         -m  Specify a mime type. Default: text/plain.
    --charset      -c  Specify an optional charset (for text only).

Examples:
    echo -n 'hello world' | as-data-uri --mime text/plain --url-encoded
    cat picture.png | as-data-uri --mime image/png | pbcopy
\n`)
	process.exit()
}

if (argv.version || argv.v) {
	process.stdout.write(pkg.name + ' ' + pkg.version + '\n')
	process.exit(0)
}

const showError = (err) => {
	if (process.env.NODE_DEBUG === 'listen-to-youtube-cli') {
		console.error(err)
	} else process.stderr.write(err + '\n')
	process.exit(err.code || 1)
}

const base64 = !(argv['url-encoded'] || argv.u)
const mime = argv.mime || argv.m || null
const charset = argv.charset || argv.c || null

// collect data from stdin
let data = Buffer.alloc(0)
process.stdin
.on('data', (chunk) => {
	data = Buffer.concat([data, chunk])
})

.once('error', showError)
.once('end', () => {
	try {
		data = encode(data, mime, charset, base64)
	} catch (err) {
		return showError(err)
	}
	process.stdout.write(data)
})

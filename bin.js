#!/usr/bin/env node
'use strict'

const mri = require('mri')

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
    as-data-uri
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

// todo

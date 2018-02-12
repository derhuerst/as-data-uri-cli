'use strict'

const {composeSync} = require('node-rfc2397')

const encode = (data, mime = null, charset = null, base64 = true) => {
	if (!Buffer.isBuffer(data)) data = Buffer.from(data)

	const info = {data, base64: !!base64}
	if (mime !== null && mime !== undefined) info.mime = mime
	if (charset !== null && charset !== undefined) info.parameters = {charset}

	return composeSync(info)
}

module.exports = encode

# as-data-uri-cli

**Command line tool to encode data into a [data URI](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs).**

Similar to [`data-uri-to-file-cli`](https://github.com/ragingwind/data-uri-to-file-cli), but

- only uses [stdio](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)) instead of read and writing files
- supports url-encoded data URIs (e.g. `data:text/plain,hello%20world`)
- supports an optional charset

[![npm version](https://img.shields.io/npm/v/as-data-uri-cli.svg)](https://www.npmjs.com/package/as-data-uri-cli)
[![build status](https://api.travis-ci.org/derhuerst/as-data-uri-cli.svg?branch=master)](https://travis-ci.org/derhuerst/as-data-uri-cli)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/as-data-uri-cli.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Usage

```
Usage:
    as-data-uri [--url-encoded] [--mime mime-type] [--charset utf8]

Options:
    --url-encoded  -u  Url-encode instead of base64.
    --mime         -m  Specify a mime type. Default: text/plain.
    --charset      -c  Specify an optional charset (for text only).

Examples:
    echo -n 'hello world' | as-data-uri --mime text/plain --url-encoded
    cat picture.png | as-data-uri --mime image/png | pbcopy
```

If you have installed it:

```shell
echo -n 'Hello World!' | as-data-uri -m text/plain -u
# data:text/plain,hello%20world
cat foo.png | as-data-uri -m image/png
# data:image/png;base64,iVBORw0K…CYII=
```


## Contributing

If you have a question or have difficulties using `as-data-uri-cli`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/as-data-uri-cli/issues).

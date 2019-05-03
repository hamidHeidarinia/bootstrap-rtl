<p align="center">

  <h3 align="center">
    <a href="https://hamidheidarinia.github.io/bootstrap-rtl/">Bootstrap-rtl</a>
  </h3>

  <p align="center">
    Sleek, intuitive, and powerful front-end framework for faster and easier web development.
    <br>
    <a href="https://hamidheidarinia.github.io/bootstrap-rtl/"><strong>Explore Bootstrap docs »</strong></a>
    <br>
    <br>
    <a href="https://github.com/hamidHeidarinia/bootstrap-rtl/issues/new">Report bug</a>
    ·
    <a href="https://github.com/hamidHeidarinia/bootstrap-rtl/labels/feature">Request feature</a>
  </p>
</p>

<br>

## Table of contents


- [Table of contents](#table-of-contents)
- [Quick start](#quick-start)
  - [Package managers](#package-managers)
  - [Download](#download)
    - [CSS](#css)
    - [JS](#js)
    - [Starter template](#starter-template)
- [Status](#status)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
  - [Using NPM scripts](#using-npm-scripts)
  - [Running documentation locally](#running-documentation-locally)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)
  - [bootstrap v4.3.1](#bootstrap-v431)
  - [bootstrap-rtl v4.3.1](#bootstrap-rtl-v431)
- [Copyright and license](#copyright-and-license)

## Quick start

Several quick start options are available:

### Package managers
- Install with [npm](https://www.npmjs.com/): `npm install bootstrap-rtol`
- Install with [Bower](https://bower.io): bower install bootstrap-rtol

### Download
- [Download the latest release.](https://github.com/hamidHeidarinia/bootstrap-rtl/archive/v4.3.1.zip)
- Clone the repo on Github: `https://github.com/hamidHeidarinia/bootstrap-rtl.git`
- Clone the repo on Gitlab: `https://gitlab.com/hamidHeidarinia/bootstrap-rtl.git`
- [Download Compiled CSS and JS](https://github.com/hamidHeidarinia/bootstrap-rtl/raw/master/download/bootstrap-rtl-4.3.1-dist.zip)

  
#### CSS
Copy-paste the stylesheet <link> into your <head> before all other stylesheets to load our CSS.
  
```html5
<link href="css/bootstrap-rtl.min.css" rel="stylesheet">
```
OR

```html5
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/custom-rtl.min.css" rel="stylesheet">
```


#### JS

<p>Many of our components require the use of JavaScript to function. Specifically, they require <a href="https://jquery.com">jQuery</a>, <a href="https://popper.js.org/">Popper.js</a>, and our own JavaScript plugins. Place the following <code class="highlighter-rouge">&lt;script&gt;</code>s near the end of your pages, right before the closing <code class="highlighter-rouge">&lt;/body&gt;</code> tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins.</p>

<p>We use <a href="https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/">jQuery’s slim build</a>, but the full version is also supported.</p>

```html
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
```
#### Starter template


```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/custom-rtl.css">
    <!-- OR -->
    <link rel="stylesheet" href="css/bootstrap-rtl.min.css">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```
## Status

[![npm version](https://img.shields.io/npm/v/bootstrap-rtol.svg?color=red)](https://www.npmjs.com/package/bootstrap-rtol)
[![Bower version](https://img.shields.io/bower/v/bootstrap-rtol.svg?color=yellow)](https://github.com/hamidHeidarinia/bootstrap-rtl)
[![Github Status](https://img.shields.io/badge/github-v4.3.1-%23292C32.svg)](https://github.com/hamidHeidarinia/bootstrap-rtl)
[![Gitlab Status](https://img.shields.io/badge/gitlab-v4.3.1-blueviolet.svg)](https://gitlab.com/hamidHeidarinia/bootstrap-rtl)

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
bootstrap-rtl/
└── dist/
    ├── css/ 
    │   ├── bootstrap-rtl-grid.min.css 
    │   ├── bootstrap-rtl-reboot.min.css    
    │   ├── bootstrap-rtl.min.css   
    │   └── custom-rtl.min.css
    | 
    └── js/
        ├── bootstrap.bundle.js
        ├── bootstrap.bundle.js.map
        ├── bootstrap.bundle.min.js
        ├── bootstrap.bundle.min.js.map
        ├── bootstrap.js
        ├── bootstrap.js.map
        ├── bootstrap.min.js
        └── bootstrap.min.js.map
```

We provide compiled CSS and JS (`bootstrap-rtl.*`), as well as compiled and minified CSS and JS (`bootstrap-rtl.min.*`). [source maps](https://developers.google.com/web/tools/chrome-devtools/debug/readability/source-maps) (`bootstrap-rtl.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`bootstrap.bundle.js` and minified `bootstrap.bundle.min.js`) include [Popper](https://popper.js.org/), but not [jQuery](https://jquery.com/).


## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/hamidHeidarinia/bootstrap-rtl/issues) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/hamidHeidarinia/bootstrap-rtl/issues/new).


## Documentation

### Using NPM scripts

| Task | Description |
| ------ | ------ |
| npm run dist | npm run dist creates the /dist directory with compiled files. |
| npm run dev | saving only as development dependencies |
| npm run watch   | Run scripts from package.json when files change. Builds and lints CSS and JavaScript for docs. |

Learn more about build Bootstrap’s by reading its [documentation](http://getbootstrap.com/docs/4.0/getting-started/build-tools/).

### Running documentation locally

1. Run through the [Using NPM scripts](#using-npm-scripts) to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. Run `npm install` to install Node.js dependencies.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/home/).

[Previous releases](https://github.com/hamidHeidarinia/bootstrap-rtl/releases) and their documentation are also available for download.

## Community

Get updates on Bootstrap's development and chat with the project maintainers and community members.

- Follow [@hamidHeidarinia](https://twitter.com/hamidHeidarinia).

## Versioning

<p>
  Currently Project is V4.3.1
  
  Note :  As Bootstrap Upgrade To new Version , Our BT-RTL Also Will Update
</p>

```
Version
├── v 4.0
|   └── v 4.1
|   |
|   └── v 4.2
|   |
|   └── v 4.3
|
 

```

## Creators
 
### bootstrap v4.3.1

**Mark Otto**

- <https://twitter.com/mdo>
- <https://github.com/mdo>

**Jacob Thornton**

- <https://twitter.com/fat>
- <https://github.com/fat>


### bootstrap-rtl v4.3.1

**Hamid Heidarinia**

- <https://twitter.com/hamidHeidarinia>
- <https://github.com/hamidHeidarinia>
- <https://www.linkedin.com/in/hamid-heidarinia>

## Copyright and license

Code and documentation copyright 2018 the [Bootstrap-rtl Authors](https://github.com/hamidHeidarinia) Code released under the [MIT License](https://github.com/hamidHeidarinia/bootstrap-rtl/blob/master/LICENSE). 

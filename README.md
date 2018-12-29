<p align="center">
  <a href="https://github.com/hamidHeidarinia/bootstrap-rtl">
    <img src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" alt="Bootstrap logo" width=72 height=72>
  </a>

  <h3 align="center">Bootstrap-rtl</h3>

  <p align="center">
    Sleek, intuitive, and powerful front-end framework for faster and easier web development.
    <br>
    <a href="https://getbootstrap.com/docs/4.1/"><strong>Explore Bootstrap docs »</strong></a>
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
  - [Download](#download)
    - [CSS](#css)
    - [JS](#js)
    - [Starter template](#starter-template)
  - [Package managers](#package-managers)
- [Status](#status)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
  - [Using NPM scripts](#using-npm-scripts)
  - [Running documentation locally](#running-documentation-locally)
- [Community](#community)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)
  - [bootstrap v4.1.3](#bootstrap-v413)
  - [bootstrap-rtl v4.1.3](#bootstrap-rtl-v413)
- [Copyright and license](#copyright-and-license)

## Quick start

Several quick start options are available:

### Download
- [Download the latest release.](https://github.com/hamidHeidarinia/bootstrap-rtl/archive/master.zip)
- Clone the repo on Github: `https://github.com/hamidHeidarinia/bootstrap-rtl.git`
- Clone the repo on Gitlab: `https://gitlab.com/hamidHeidarinia/bootstrap-rtl.git`
- [Download Compiled CSS and JS](https://github.com/hamidHeidarinia/bootstrap-rtl/raw/master/bootstrap-rtl-4.1.3-dist.zip)

  
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

### Package managers
- Install with [npm](https://www.npmjs.com/): `npm install bootstrap-rtol`
- Install with [Bower](https://bower.io): bower install bootstrap-rtol



## Status

[![Slack](https://img.shields.io/badge/Slack-channel-%236ecadc.svg)](https://bootstrap-rtl.slack.com/)
[![Telegram](https://img.shields.io/badge/Telegram-Group-%230088cc.svg)](https://t.me/joinchat/FNTvOkyXjQspDgUxC2IxoA)
[![npm version](https://img.shields.io/npm/v/bootstrap.svg)](https://www.npmjs.com/package/bootstrap-rtol)
[![Bower version](https://img.shields.io/badge/Bower-v4.1.3-yellow.svg)](https://github.com/hamidHeidarinia/bootstrap-rtl)
[![Github Status](https://img.shields.io/badge/Github-v4.1.3-%23292C32.svg)](https://github.com/hamidHeidarinia/bootstrap-rtl)
[![Gitlab Status](https://img.shields.io/badge/Gitlab-v4.1.3-%233A0064.svg)](https://gitlab.com/hamidHeidarinia/bootstrap-rtl)

[![Sauce Labs Test Status](https://saucelabs.com/browser-matrix/bootstrap.svg)](https://saucelabs.com/u/bootstrap)

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
bootstrap/
└── dist/
    ├── css/
    │   ├── bootstrap-rtl-grid.css
    │   ├── bootstrap-rtl-grid.css.map
    │   ├── bootstrap-rtl-grid.min.css
    │   ├── bootstrap-rtl-grid.min.css.map
    │   ├── bootstrap-rtl-reboot.css
    │   ├── bootstrap-rtl-reboot.css.map
    │   ├── bootstrap-rtl-reboot.min.css
    │   ├── bootstrap-rtl-reboot.min.css.map
    │   ├── bootstrap-rtl.css
    │   ├── bootstrap-rtl.css.map
    │   ├── bootstrap-rtl.min.css
    │   ├── bootstrap-rtl.min.css.map
    |   ├── custom-rtl.css
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
| npm run dist | npm run dist creates the /dist directory with compiled files. Uses Sass, Autoprefixer, and UglifyJS. |
| npm test | Same as npm run dist plus it runs tests locally |
| npm run docs   | Builds and lints CSS and JavaScript for docs. You can then run the documentation locally via npm run docs-serve. |

Learn more about build Bootstrap’s by reading its [documentation](http://getbootstrap.com/docs/4.0/getting-started/build-tools/).

### Running documentation locally

1. Run through the [tooling setup](https://getbootstrap.com/docs/4.1/getting-started/build-tools/#tooling-setup) to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. Run `npm install` to install Node.js dependencies.
3. Run `npm start` to compile CSS and JavaScript files, generate our docs, and watch for changes.
4. Open `http://localhost:9001` in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/home/).

[Previous releases](https://github.com/twbs/bootstrap/releases) and their documentation are also available for download.


## Community

Get updates on Bootstrap's development and chat with the project maintainers and community members.

- Follow [@hamidHeidarinia](https://twitter.com/hamidHeidarinia).


## Community

Get updates on Bootstrap's development and chat with the project maintainers and community members.

- Follow [@hamidHeidarinia](https://twitter.com/hamidHeidarinia).



## Versioning

<p>
  Currently Project is V4.1.3
  
  Note :  As Bootstrap Upgrade To new Version , Our BT-RTL Also Will Update
</p>

```
Version
├── v 4.0
|   └── v 4.1
|   |
|   └── v 4.1.1
|   |
|   └── v 4.1.2
|   |
|   └── v 4.1.3
|
 

```

## Creators
 
### bootstrap v4.1.3

**Mark Otto**

- <https://twitter.com/mdo>
- <https://github.com/mdo>

**Jacob Thornton**

- <https://twitter.com/fat>
- <https://github.com/fat>


### bootstrap-rtl v4.1.3

**Hamid Heidarinia**

- <https://twitter.com/hamidHeidarinia>
- <https://github.com/hamidHeidarinia>
- <https://www.linkedin.com/in/hamid-heidarinia>
- <https://www.heidarinia.pro>

## Copyright and license

Code and documentation copyright 2018 the [Bootstrap-rtl Authors](https://github.com/hamidHeidarinia) Code released under the [MIT License](https://github.com/hamidHeidarinia/bootstrap-rtl/blob/master/LICENSE). 

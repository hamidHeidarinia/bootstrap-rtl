

<p align="center">  

  <h1 align="center">
    <a href="https://hamidheidarinia.github.io/bootstrap4-rtl/">
      Bootstrap4-rtl
    </a>
  </h1>

  

  <p align="center">
    Sleek, intuitive, and powerful front-end framework for faster and easier web development.
    <br>
    <a href="https://getbootstrap.com/docs/4.0/"><strong>Explore Bootstrap docs »</strong></a>
    <br>
    <br>
    <a href="https://github.com/hamidHeidarinia/bootstrap4-rtl/archive/master.zip">Download Source</a>
  .
  <a href="https://github.com/hamidHeidarinia/bootstrap4-rtl/raw/master/bootstrap4-rtl.zip">Download Compiled</a>
  .
  <a href="http://bs4rtl.heidarinia.pro/">Test Bs4-rtl Page</a>
  </p>
</p>

<br>

## Description

<p>
  In this project, I tried to customize Bootstrap 4 for rtl pages.
  I will be happy,:+1: you'll  be Test it and report any bugs or issues.
</p>


- [What's included](#whats-included)
- [Introduction](#introduction)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)
- [Copyright and license](#copyright-and-license)



## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
dist/
├── css/
│   ├── bootstrap-rtl.css
│   ├── bootstrap-rtl.css.map
│   ├── bootstrap-rtl.min.css
│   ├── bootstrap-rtl.min.css.map
│   ├── custom-rtl.css
│   ├── custom-rtl.min.css
└── js/
    ├── bootstrap.bundle.js
    ├── bootstrap.bundle.min.js
    ├── bootstrap.js
    └── bootstrap.min.js
```

We provide compiled CSS and JS (`bootstrap-rtl.*`), as well as compiled and minified CSS and JS (`bootstrap-rtl.min.*`). CSS [source maps](https://developers.google.com/web/tools/chrome-devtools/debug/readability/source-maps) (`bootstrap-rtl.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`bootstrap.bundle.js` and minified `bootstrap.bundle.min.js`) include [Popper](https://popper.js.org/), but not [jQuery](https://jquery.com/).

## introduction

Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with BootstrapCDN and a template starter page.

### You can use bootstrap4-rtl in two ways
  
### CSS
Copy-paste the stylesheet <link> into your <head> before all other stylesheets to load our CSS.
  
```html5
<link href="css/bootstrap-rtl.min.css" rel="stylesheet">
```
OR

```html5
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/custom-rtl.min.css" rel="stylesheet">
```


### JS

<p>Many of our components require the use of JavaScript to function. Specifically, they require <a href="https://jquery.com">jQuery</a>, <a href="https://popper.js.org/">Popper.js</a>, and our own JavaScript plugins. Place the following <code class="highlighter-rouge">&lt;script&gt;</code>s near the end of your pages, right before the closing <code class="highlighter-rouge">&lt;/body&gt;</code> tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins.</p>

<p>We use <a href="https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/">jQuery’s slim build</a>, but the full version is also supported.</p>

```html
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
```




### Starter template

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
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


## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/hamidHeidarinia/bootstrap4-rtl/issues) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/hamidHeidarinia/bootstrap4-rtl/issues/new).


## Documentation

### Using NPM scripts

| Task | Description |
| ------ | ------ |
| npm run dist | npm run dist creates the /dist directory with compiled files. Uses Sass, Autoprefixer, and UglifyJS. |
| npm test | Same as npm run dist plus it runs tests locally |
| npm run docs   | Builds and lints CSS and JavaScript for docs. You can then run the documentation locally via npm run docs-serve. |

Learn more about build Bootstrap’s by reading its [documentation](http://getbootstrap.com/docs/4.0/getting-started/build-tools/).


## Community

Get updates on Bootstrap's development and chat with the project maintainers and community members.

- Follow [@hamidHeidarinia](https://twitter.com/hamidHeidarinia).



## Versioning

<p>
  Currently Project is V4.1.1
  
  Note :  As Bootstrap Upgrade To new Version , Our BT-RTL Also Will Update
</p>

```
Version
├── v 4.0
|   └── v 4.1
|   |
|   └── v 4.1.1
|
 

```

## Creators


### bootstrap v4.0.0 

**Mark Otto**

- <https://twitter.com/mdo>
- <https://github.com/mdo>

**Jacob Thornton**

- <https://twitter.com/fat>
- <https://github.com/fat>

### bootstrap4-rtl

**Hamid Heidarinia**

- <https://twitter.com/hamidHeidarinia>
- <https://github.com/hamidHeidarinia>
- <https://www.linkedin.com/in/hamid-heidarinia>
- <https://www.heidarinia.pro>

## Copyright and license

Code and documentation copyright 2018 the [Bootstrap4-rtl Authors](https://github.com/hamidHeidarinia) Code released under the [GPL-3.0 License](https://github.com/hamidHeidarinia/bootstrap4-rtl/blob/master/LICENSE). 

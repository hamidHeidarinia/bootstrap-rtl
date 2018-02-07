


<p align="center">  

  <h3 align="center">
    <a href="https://hamidheidarinia.github.io/bootstrap4-rtl/">
      Bootstrap4-rtl
    </a>
  </h3>

  <p align="center">
    Sleek, intuitive, and powerful front-end framework for faster and easier web development.
    <br>
    <a href="https://getbootstrap.com/docs/4.0/"><strong>Explore Bootstrap docs »</strong></a>
    <br>
    <br>
    <a href="https://themes.getbootstrap.com/">Bootstrap Themes</a>
    ·
    <a href="https://jobs.getbootstrap.com/">Job Board</a>
    ·
    <a href="https://blog.getbootstrap.com/">Blog</a>
  </p>
</p>

<br>

## Description

<p>
  In this project, I tried to customize Bootstrap 4 for rtl pages.
  I would Like To  Developer Or Designer Test it And Report If There's Any Bugs or Issues.
</p>


- [What's included](#whats-included)
- [Introduction](#introduction)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creator)
- [Copyright and license](#copyright-and-license)



## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
bootstrap4-rtl/
├── css/
│   ├── bootstrap-rtl.css
│   ├── bootstrap-rtl.css.map
│   ├── bootstrap-rtl.min.css
│   ├── bootstrap-rtl.min.css.map
│   ├──bootstrap.css
│   ├── bootstrap.min.css
└── js/
    ├── bootstrap.bundle.js
    ├── bootstrap.bundle.min.js
    ├── bootstrap.js
    └── bootstrap.min.js
```

We provide compiled CSS and JS (`bootstrap-rtl.*`), as well as compiled and minified CSS and JS (`bootstrap-rtl.min.*`). CSS [source maps](https://developers.google.com/web/tools/chrome-devtools/debug/readability/source-maps) (`bootstrap-rtl.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`bootstrap.bundle.js` and minified `bootstrap.bundle.min.js`) include [Popper](https://popper.js.org/), but not [jQuery](https://jquery.com/).

## introduction

Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with BootstrapCDN and a template starter page.

### Two ways to use bootstrap4-rtl.
#### USE
 bootstrap-rtl.css 
 
 bootstrap-rtl.min.css 
#### OR
 custom-rtl.css
 
 custom-rtl.min.css
  
### CSS
Copy-paste the stylesheet <link> into your <head> before all other stylesheets to load our CSS.

<pre>
<code class="language-html" data-lang="html">
<span class="nt">&lt;link</span> <span class="na">href=</span><span class="s">"css/bootstrap-rtl.min.css"</span> <span class="na">rel=</span><span class="s">"stylesheet"</span><span class="nt">&gt;</span>
</code>
</pre>

<pre>
<code class="language-html" data-lang="html">
<span class="nt">&lt;link</span> <span class="na">href=</span><span class="s">"css/custom-rtl.min.css"</span> <span class="na">rel=</span><span class="s">"stylesheet"</span><span class="nt">&gt;</span>
</code>
</pre>

### JS

<p>Many of our components require the use of JavaScript to function. Specifically, they require <a href="https://jquery.com">jQuery</a>, <a href="https://popper.js.org/">Popper.js</a>, and our own JavaScript plugins. Place the following <code class="highlighter-rouge">&lt;script&gt;</code>s near the end of your pages, right before the closing <code class="highlighter-rouge">&lt;/body&gt;</code> tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins.</p>

<p>We use <a href="https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/">jQuery’s slim build</a>, but the full version is also supported.</p>

<pre><code class="language-html" data-lang="html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://code.jquery.com/jquery-3.2.1.slim.min.js"</span> <span class="na">integrity=</span><span class="s">"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"</span> <span class="na">crossorigin=</span><span class="s">"anonymous"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"</span> <span class="na">integrity=</span><span class="s">"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"</span> <span class="na">crossorigin=</span><span class="s">"anonymous"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"</span> <span class="na">integrity=</span><span class="s">"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"</span> <span class="na">crossorigin=</span><span class="s">"anonymous"</span><span class="nt">&gt;&lt;/script&gt;</span></code></pre>

### Starter template

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:

<pre>
<code class="language-html" data-lang="html"><span class="cp">&lt;!doctype html&gt;</span>
<span class="nt">&lt;html</span> <span class="na">lang=</span><span class="s">"en"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;head&gt;</span>
    <span class="c">&lt;!-- Required meta tags --&gt;</span>
    <span class="nt">&lt;meta</span> <span class="na">charset=</span><span class="s">"utf-8"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;meta</span> <span class="na">name=</span><span class="s">"viewport"</span> <span class="na">content=</span><span class="s">"width=device-width, initial-scale=1, shrink-to-fit=no"</span><span class="nt">&gt;</span>

    <span class="c">&lt;!-- Bootstrap CSS --&gt;</span>
    <span class="nt">&lt;link</span> <span class="na">rel=</span><span class="s">"stylesheet"</span> <span class="na">href=</span><span class="s">"css/bootstrap-rtl.min.css"</span><span class="nt">&gt;</span>

    <span class="nt">&lt;title&gt;</span>Hello, world!<span class="nt">&lt;/title&gt;</span>
  <span class="nt">&lt;/head&gt;</span>
  <span class="nt">&lt;body&gt;</span>
    <span class="nt">&lt;h1&gt;</span>Hello, world!<span class="nt">&lt;/h1&gt;</span>

    <span class="c">&lt;!-- Optional JavaScript --&gt;</span>
    <span class="c">&lt;!-- jQuery first, then Popper.js, then Bootstrap JS --&gt;</span>
    <span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://code.jquery.com/jquery-3.2.1.slim.min.js"</span> <span class="na">integrity=</span><span class="s">"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"</span> <span class="na">crossorigin=</span><span class="s">"anonymous"</span><span class="nt">&gt;&lt;/script&gt;</span>
    <span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"</span> <span class="na">integrity=</span><span class="s">"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"</span> <span class="na">crossorigin=</span><span class="s">"anonymous"</span><span class="nt">&gt;&lt;/script&gt;</span>
    <span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"</span> <span class="na">integrity=</span><span class="s">"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"</span> <span class="na">crossorigin=</span><span class="s">"anonymous"</span><span class="nt">&gt;&lt;/script&gt;</span>
  <span class="nt">&lt;/body&gt;</span>
<span class="nt">&lt;/html&gt;</span></code></pre>


## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/hamidHeidarinia/bootstrap4-rtl/issues) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/hamidHeidarinia/bootstrap4-rtl/issues/new).


## Documentation

### Using NPM scripts
```
|-----------------------|-------------------------------------------------------------|

|        Task        |                     Description                       |
|-----------------------|-------------------------------------------------------------|
|                       | npm run dist creates the /dist directory|
|  npm run dist | with compiled files. Uses Sass,              |
|                       | Autoprefixer, and UglifyJS.                    |
|-----------------------|-------------------------------------------------------------|
|                       | Same as npm run dist plus it runs tests|
|    npm test     | locally                                                   |
|                       |                                                             |
|-----------------------|-------------------------------------------------------------|
|                       | Builds and lints CSS and JavaScript for  |
| npm run docs | docs. You can then run the                   |
|                       | documentation locally via npm run        |
|                       | docs-serve.                                            |
|-----------------------|--------------------------------------------------------------|



```

Learn more about build Bootstrap’s by reading its [documentation](http://getbootstrap.com/docs/4.0/getting-started/build-tools/).


## Community

Get updates on Bootstrap's development and chat with the project maintainers and community members.

- Follow [@hamidHeidarinia](https://twitter.com/hamidHeidarinia).



## Versioning

<p>
  Currently Project is V.1.0.0.
  
  Note :  As Bootstrap Upgrade To new Version , Our BT-RTL Also Will Update
</p>

```
version/
├── 1.0/

```

## Creator

**Hamid Heidarinia**

- <https://twitter.com/hamidHeidarinia>
- <https://github.com/hamidHeidarinia>
- <https://www.linkedin.com/in/hamid-heidarinia>

- <https://www.heidarinia.pro>




## Copyright and license

Code and documentation copyright 2018 the [Bootstrap4-rtl Authors](https://github.com/hamidHeidarinia) and [Twitter, Inc.](https://twitter.com) Code released under the [GPL-3.0 License](https://github.com/hamidHeidarinia/bootstrap4-rtl/blob/master/LICENSE). 

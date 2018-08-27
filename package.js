// package metadata file for Meteor.js

/* eslint-env meteor */

Package.describe({
  name: 'bootstrap-rtol',  // https://hamidheidarinia.github.io/bootstrap-rtl/
  summary: 'The most popular front-end framework for developing responsive, mobile first projects on the web.',
  version: '4.1.3',
  git: 'https://github.com/hamidHeidarinia/bootstrap-rtl'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.addFiles([
    'dist/css/bootstrap.css',
    'dist/js/bootstrap.js'
  ], 'client');
});

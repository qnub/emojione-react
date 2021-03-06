Package.describe({
  summary: 'React Emojione component.',
  version: '2.0.1',
  name: 'qnub:emojione-react',
  git: 'https://github.com/qnub/emojione-react.git',
});

Npm.depends({
  'externalify': '0.1.0',
  'emojione': '2.0.1'
});

Package.onUse(function(api, where) {
  api.versionsFrom('METEOR@1.2');

  api.use([
    'ejson@1.0.7',
    'ecmascript',
    'react@0.14.1_1',
    'cosmos:browserify@0.8.3'
  ]);

  api.addFiles([
    'style/style.css',
    'lib/window.react.js'
  ], 'client');

  api.addFiles([
    'lib/react.browserify.options.json',
    'lib/react.browserify.js',

    'components/emojione.jsx'
  ]);

  api.export(['Emojione']);
});

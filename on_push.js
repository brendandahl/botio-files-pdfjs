var botio = require(process.env['BOTIO_MODULE']);
require('shelljs/global');

// uber test

//
// Publish viewer to gh-pages
//
exec('node make web'); 

// This dir should have its own .git/
cd('build/gh-pages'); 
exec('git commit -am "Auto-updating via bot"');
exec('git push origin gh-pages');

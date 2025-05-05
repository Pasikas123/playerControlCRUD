let mix = require('laravel-mix');

mix
.js('src/js/app.js', 'public')
.css('src/style/style.css', 'public')
.copy('src/*.html', 'public');
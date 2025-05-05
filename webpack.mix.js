let mix = require('laravel-mix');

mix
.js('src/js/app.js', 'docs')
.css('src/style/style.css', 'docs')
.copy('src/*.html', 'docs');
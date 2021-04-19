let mix = require('laravel-mix');

// mix.sass('src/app.scss', 'dist/');
mix.sass('src/master.scss', 'css/');
/**
 * Laravel Mix non scrive fuori dalla cartella di progetto (my-app/webpack.mix.js)? 
 * 
 * da dentro /my-app/ non funziona 
 *		mix.sass('src/master.scss', '../css/');
 *		mix.sass('src/master.scss', '../../css/');
 * 
 * vuol dire che la cartella my-app deve coincidere con html-sass-first?
 * 
 */
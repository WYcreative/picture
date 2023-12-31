import gulp from 'gulp';
import plumber from 'gulp-plumber';
import imagemin from 'gulp-imagemin';
import webp from 'imagemin-webp';
import rename from 'gulp-rename';

import config from '../config/index.js';

import {getDirectory} from './utilities.js';



const {src, dest} = gulp;



function examples() {
	return src(config.examples.images)
		.pipe(plumber())
		.pipe(imagemin())
		.pipe(dest(getDirectory(config.build.images)))
		.pipe(imagemin([
			webp({
				quality: 90,
			}),
		]))
		.pipe(rename(path => {
			path.extname = '.webp';
		}))
		.pipe(dest(getDirectory(config.build.images)));
}



function dist() {
	return src(config.build.images)
		.pipe(dest(getDirectory(config.dist.images)));
}



examples.displayName = 'examples:images';
dist.displayName = 'dist:images';

export {
	examples,
	dist,
};

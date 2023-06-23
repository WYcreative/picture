import gulp from 'gulp';

import * as cleanTasks from './gulp/clean.js';
import * as styles from './gulp/styles.js';
import * as images from './gulp/images.js';
import * as libs from './gulp/libs.js';
import * as views from './gulp/views.js';
import * as browser from './gulp/browser.js';
import * as watch from './gulp/watch.js';



const {series, parallel} = gulp;



export const clean = parallel(
	cleanTasks.build,
	cleanTasks.dist,
);



const build = parallel(
	images.examples,
	styles.examples,
	libs.build,
	views.examples,
);



export default series(
	clean,
	build,
	browser.build,
	watch.build,
	watch.examples,
);



export const serve = series(
	browser.build,
	watch.build,
	watch.examples,
);



export const dist = series(
	cleanTasks.dist,
	images.dist,
	styles.dist,
	libs.dist,
	views.dist,
);

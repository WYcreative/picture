import gulp from 'gulp';

import config from '../config/index.js';

import * as images from './images.js';
import * as styles from './styles.js';
import * as libs from './libs.js';
import * as views from './views.js';
import {reload} from './browser.js';



const {watch, series} = gulp;



function build(done) {
	watch(config.libs, series(libs.build, reload));

	done();
}



function examples(done) {
	watch([config.src.images, config.examples.images], series(images.examples, reload));
	watch([config.src.styles, config.examples.styles], styles.examples);
	watch([config.src.views, config.examples.views[0]], series(views.examples, reload));

	done();
}


build.displayName = 'build:watch';
examples.displayName = 'examples:watch';

export {
	build,
	examples,
};

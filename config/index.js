import {createRequire} from 'node:module';
import {join} from 'node:path/posix';



// TODO: Use import assertions once they become stable.
const pkg = createRequire(import.meta.url)('../package.json');

const src = './src';
const examples = './examples';
const build = './build';
const dist = './dist';

const examplesPath = 'examples';

const config = {
	name: pkg.name,
	libs: './config/libs.js',
	src: {
		images: join(src, 'images/**/*.{webp,png,jp?(e)g,gif,svg}'),
		styles: join(src, 'styles/**/*.s@(a|c)ss'),
		views: join(src, 'views/**/*.pug'),
	},
	examples: {
		images: join(examples, 'images/**/*.{webp,png,jp?(e)g,gif,svg}'),
		styles: join(examples, 'styles/**/*.s@(a|c)ss'),
		views: [
			join(examples, 'views/**/*.pug'),
			'!**/_*/**',
			'!**/_*',
		],
	},
	build: {
		base: build,
		images: join(build, examplesPath, 'assets/images/**/*.{webp,png,jp?(e)g,gif,svg}'),
		styles: join(build, examplesPath, 'assets/styles/**/*.css'),
		libs: join(build, examplesPath, 'assets/libs/**'),
		views: join(build, examplesPath, '**/*.html'),
	},
	dist: {
		base: dist,
		images: join(dist, examplesPath, 'assets/images/**/*.{webp,png,jp?(e)g,gif,svg}'),
		styles: join(dist, examplesPath, 'assets/styles/**/*.css'),
		libs: join(dist, examplesPath, 'assets/libs/**'),
		views: join(dist, examplesPath, '**/*.html'),
	},
};



export default config;

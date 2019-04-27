const path = require('path');

module.exports = {
	entry: './scr/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	watch: true
};
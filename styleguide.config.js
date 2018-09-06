const path = require('path');

module.exports = {
	title: 'React Radio',
	webpackConfig: require('./webpack.config.js'),
	components: ['examples/*Radio*.jsx', 'src/*.jsx'],
	require: [
		'babel-polyfill',
    	path.join(__dirname, 'node_modules/trendmicro-ui/dist/css/trendmicro-ui.css'),
	]
};
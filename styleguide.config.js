const path = require('path');

module.exports = {
	title: 'React Radio',
	webpackConfig: require('./webpack.config.js'),
	components: ['examples/*Radio*.jsx', 'src/*.jsx'],
	require: [
		'babel-polyfill',
    	path.join(__dirname, 'node_modules/trendmicro-ui/dist/css/trendmicro-ui.css'),
    	path.join(__dirname, 'node_modules/@trendmicro/react-buttons/dist/react-buttons.css'),
    	path.join(__dirname, 'dist/react-radio.css'),
	]
};
module.exports = {
	entry: "./app/app.js",
	output: {
		filename: "public/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|browser_components)/,
				loader: 'babel',
				query: {
					presets: ['react']
				}
			}
		]
	}
}
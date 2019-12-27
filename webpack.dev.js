const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.tsx'
	},
	devtool: "inline-source-map",
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/year-project/',
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
					experimentalWatchApi: true,
					getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
				},
			},
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'source-map-loader',
					options: {
						enforce: 'pre',
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			}
		]
	},

	plugins: [
		new webpack.ProgressPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin(
			{
				template: path.resolve(__dirname, 'src', 'index.html')
			}),
		new BundleAnalyzerPlugin(),
		new CopyPlugin([
      { from: './models', to: './models' },
    ]),
	],

	devServer: {
		headers: {
      "Access-Control-Allow-Origin": "*",
		},
		open: true,
		openPage: "year-project/",
		contentBase: './dist',
		historyApiFallback: true,
		proxy: {
      "/api/*": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false
			}
		}
	},
	
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
		alias: {
		 	'~': path.resolve(__dirname, 'src'),
    },
	}
};

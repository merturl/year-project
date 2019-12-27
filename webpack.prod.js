const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		app: './src/index.tsx'
	},
	devtool: false,
	output: {
		filename: '[name].[chunkhash].js',
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
		new CleanWebpackPlugin(),
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin(
			{
				template: path.resolve(__dirname, 'src', 'index.html')
			}),
		new CopyPlugin([
			{ from: './models', to: './models' },
		]),
	],

	optimization: {
		runtimeChunk: 'single',
		moduleIds: 'hashed',
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      cacheGroups: {
        lodash: {
          test: /[\\/]node_modules[\\/]lodash[\\/].*[jt]sx?$/,
          chunks: 'initial',
          priority: 20,
          enforce: true
				},
				plotly: {
          test: /[\\/]node_modules[\\/]plotly.js[\\/].*[jt]sx?$/,
          chunks: 'initial',
          priority: 20,
          enforce: true
        },
        vendors: {
          test: /[\\/]node_modules[\\/].*[jt]sx?$/,
          chunks: 'initial',
          priority: -10,
          reuseExistingChunk: true,
          enforce: true
        },
        default: {
          priority: -20,
          chunks: 'all',
          test: /.*[jt]sx?$/,
          reuseExistingChunk: true
        },
      },
    },
	},
	
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
		alias: {
			'~': path.resolve(__dirname, 'src'),
	 	},
	}
};

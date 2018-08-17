const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const templates = ['index']

const isProd = process.env.NODE_ENV === 'production'
const ASSETS_DIR = 'assets'
const TEMP_DIR = 'tmp'

const htmlWebpackPlugins = () =>
  templates.map(
    name =>
      new HtmlWebpackPlugin({
        filename: `${name}.html`,
        template: `./src/views/pages/${name}`,
        excludeChunks: Object.keys(entryTemplates),
        excludeAssets: [/styles.js/]
      })
  )

const debug = isProd ? {} : { __debug: './src/scripts/debug.js' }

const entryTemplates = templates.reduce(
  (acc, name) => ({
    ...acc,
    [`template_${name}`]: `./src/views/pages/${name}`
  }),
  {}
)

module.exports = {
  entry: {
    ...entryTemplates,
    styles: './src/styles/index.scss',
    scripts: './src/scripts/',
    // images: './src/images/',
    ...debug
  },

  output: {
    path: path.resolve(__dirname, './build'),
    filename: isProd ? ({chunk: {name}}) => {
      const isTempChunk = name.includes('template_') || name.includes('styles')
      return isTempChunk ? `${TEMP_DIR}/[name].js` : `${ASSETS_DIR}/js/[name].js`
    } : `${ASSETS_DIR}/js/[name].js`,

    publicPath: '/'
  },

  mode: isProd ? 'production' : 'development',

  devtool: isProd ? false : 'inline-source-map',

  devServer: {
    contentBase: './build',
    port: 9100
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },

  module: {
    rules: [
      {
        test: /\.twig$/,
        loader: 'twig-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: `${ASSETS_DIR}/img/[name].[ext]`
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: `${ASSETS_DIR}/img/[name].[ext]`
            }
          },
          {
            loader: 'svgo-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['build'], {
      exclude: templates
    }),
    ...htmlWebpackPlugins(),
    new HtmlWebpackExcludeAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: `${ASSETS_DIR}/css/[name].css`
    }),
    new webpack.DefinePlugin({
      IS_PROD: JSON.stringify(isProd)
    })
  ]
}

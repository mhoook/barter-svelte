const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const sveltePreprocess = require('svelte-preprocess')
const path = require('path')

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'

module.exports = env =>  ({
  entry: {
    bundle: ['./src/main.js'],
  },
  resolve: {
    alias: {
      svelte: path.dirname(require.resolve('svelte/package.json')),
      '@': path.join(__dirname, '/src'),
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[id].js',
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            compilerOptions: {
              dev: !prod,
            },
            preprocess: sveltePreprocess({
              postcss: true,
            }),
            emitCss: false,
            hotReload: !prod,
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /svelte\.\d+\.css/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        include: /svelte\.\d+\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        // required to prevent errors from Svelte on Webpack 5+
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      base: env.server&&'/landings/barter/dist/index.html'||'',
      template: path.join(__dirname, './public/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'src/assets' },
        // { from: 'src/fonts', to: 'src/fonts' }
      ],
    }),
  ],
  devtool: prod ? false : 'source-map',
  devServer: {
    hot: true,
  },
})

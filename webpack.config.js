const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

/** Открывает браузер только после первой успешной сборки (стили успевают подгрузиться). */
class OpenBrowserAfterCompilePlugin {
  constructor(port = 3000, host = 'localhost') {
    this.port = port;
    this.host = host;
    this.opened = false;
  }

  apply(compiler) {
    compiler.hooks.done.tap('OpenBrowserAfterCompilePlugin', (stats) => {
      if (this.opened || stats.hasErrors()) return;
      this.opened = true;
      const open = require('open');
      open(`http://${this.host}:${this.port}`);
    });
  }
}

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3000,
    open: false,
    hot: true,
  },
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new ESLintPlugin({
      extensions: ['js'],
      failOnError: false,
    }),
    ...(devMode ? [new OpenBrowserAfterCompilePlugin(3000)] : []),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
        use: devMode
          ? []
          : [
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    progressive: true,
                  },
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  webp: {
                    quality: 75,
                  },
                },
              },
            ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};

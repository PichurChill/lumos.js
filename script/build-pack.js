const path = require('path')
const fs = require('fs')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const webpack = require('webpack')

const config = require('./webpack.conf')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

const pkName = 'lumos.min.js'

// 构建全量压缩包
let building = ora('building...')
building.start()
rm(path.resolve(rootPath, 'dist', pkName), err => {
  if (err) throw (err)
  webpack(config, function (err, stats) {
    if (err) throw (err)
    building.stop()
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    fs.writeFileSync(`demo/public/${pkName}`, fs.readFileSync(`dist/${pkName}`));
    console.log(chalk.cyan('  Build complete.\n'))
  })
})
const rm = require('rimraf')
const path = require('path')
const rootPath = path.resolve(__dirname, '../..')
const fileFn  = require('./fileFn')

// delete old
rm.sync(path.resolve(rootPath, 'css'))
rm.sync(path.resolve(rootPath, 'js'))
rm.sync(path.resolve(rootPath, 'img'))
rm.sync(path.resolve(rootPath, 'favicon.ico'))
rm.sync(path.resolve(rootPath, 'index.html'))


fileFn.copyDir(path.resolve(rootPath, 'page/dist'), rootPath)
rm(path.resolve(rootPath, 'page/dist'), () => {})







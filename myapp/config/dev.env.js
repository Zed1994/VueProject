var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  proxyTable:{"/zhe800/api":{target:'http://10.2.153.173',changeOrigin:true}}

})

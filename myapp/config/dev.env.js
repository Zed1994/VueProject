var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  proxyTable:{"/h51701/api":{target:'http://localhost',changeOrigin:true}}

})

// Import ‘foo’ from ‘foo.js’
const foo = require('./foo')

// ‘bar’ is only available in this file
function bar () {
  const bar = foo()
  return bar
}

// Expose ‘bar’ for ‘require(…)’
module.exports = bar

// Import ‘foo’ from ‘foo.js’
import foo from './foo'

// ‘bar’ is only available in this file
function bar () {
  const bar = foo()
  return bar
}

// Expose ‘bar’ for ‘require(…)’
export default bar

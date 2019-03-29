// ‘App’ serves as a namespace for everything else
const App = {}

// Add ‘foo’ to our namespace
App.foo = function () {
  return 'bar'
}

// ‘foo’ is only callable via ‘App’
App.foo()

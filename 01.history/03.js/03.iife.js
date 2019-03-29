// The IIFE creates a scope
(function () {
  // ‘foo’ is only available in this scope
  function foo () {
    return 'bar'
  }

  foo()
})()

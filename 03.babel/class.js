function foo () {
  return 'foo'
}

class Bar {
  constructor () {
    this.value = foo()
  }
}

new Bar()

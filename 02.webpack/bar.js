import foo from './foo'

class Bar {
  constructor () {
    this.value = foo()
  }
}

export default Bar

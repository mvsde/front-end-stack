if (1 > 0) {
  import('./foo')
    .then(foo => {
      foo.default()
    })
} else  {
  import('./bar')
    .then(bar => {
      bar.default()
    })
}

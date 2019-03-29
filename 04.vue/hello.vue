<template>
  <section>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'Hello World',
      list: ['foo', 'bar', 'baz']
    }
  }
}
</script>

<style>
h1 {
  color: cornflowerblue;
}
</style>

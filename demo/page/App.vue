<template>
  <h1>Hello!</h1>
</template>
<script>
import test from '../../src/data/isEmpty'
const test2 = require('../../src/data/isEmpty')
console.log(test);

console.log(test2);

export default {
  mounted () {
    window.location.href = '/#/cookie'
  }
}
</script>

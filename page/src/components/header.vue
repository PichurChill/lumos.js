<template>
  <div class="e-header e-clearfix">
      <div class="e-header-left" @click="$router.push('/')">
        Lumos.js
      </div>
      <div class="e-header-right">
        <router-link to="/document">Docs</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'e-header'
}
</script>

<style lang="scss" scoped>
  .e-header {
    font-size: .14rem;
    background-color: #24242a;
    color: #fff;
    height: .7rem;
    line-height: .7rem;
    padding: 0 .2rem;
    a {
      text-decoration: none;
      color: #fff;
      outline: none;
    }
    &-left {
      float: left;
      font-size: .3rem;
      font-weight: bold;
      cursor: pointer;
    }

    &-right {
      float: right;
      font-weight: bold;
      font-size: .15rem;
    }
  }
</style>

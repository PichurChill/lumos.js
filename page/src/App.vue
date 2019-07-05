<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>

<style lang="scss">
 @import '~@/styles/public.scss';
 #app {
   height: 100vh;
   font-size: .14rem;
 }
</style>

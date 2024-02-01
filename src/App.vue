<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store.js'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  created () {
  },
  components: {

  },
  store
}
</script>

<style>

</style>

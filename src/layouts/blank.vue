<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data(router) {
    return {
      section: 'Login',
      loading: '',
      username: '',
      password: '',
      response: ''
    }
  }
}

</script>


<template>
  <header class="main-header">
    <!-- Logo -->
    <a href="/dashboard" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>To</b>do</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>tt</b></span>
    </a>

    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">

          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img :src="currentUser.avatar" class="user-image" alt="User Image">
              <span class="hidden-xs">{{ currentUser.name }}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img :src="currentUser.avatar" class="img-circle" alt="User Image">

                <p>
                  {{ currentUser.name }} <br> {{ currentUser.role }}
                  <small>{{ currentUser.createdAt }}</small>
                </p>
              </li>
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a @click.prevent="logout()" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->

        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'va-navibar',
  computed: {
    ...mapGetters([
      'unreadMessagesCount',
      'unreadNotificationsCount',
      'remainTasksCount',
      'currentUser'
    ])
  },
  methods: {

    async logout() {
      localStorage.removeItem('userMenus')
      localStorage.removeItem('userInfo')
      localStorage.removeItem('accessToken')
      // Redirect to login page
      await this.$router.push('/login')


    }
  }
}

</script>

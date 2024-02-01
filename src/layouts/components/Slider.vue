<template>
  <aside id="slider" class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img :src="currentUser.avatar" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{ currentUser.full_name }}</p>
          <a href="#"><i class="fa fa-circle" :style="`color:${currentUser.state.color}`"></i> {{ currentUser.state.name
          }}</a>
        </div>
      </div>
      <ul data-widget="tree" class="sidebar-menu">
       
        <li>
          <router-link :to="{ name: 'task' }"  >
      <i class="fa fa-bars"></i> <span> Task</span>
    </router-link>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'va-slider',
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  },
  created() {
  },
}
</script>

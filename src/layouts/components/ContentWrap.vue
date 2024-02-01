<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="content-wrap" class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="container-fluid min_height_area">
      <div class="row">
        <div class="col-xs-12">
          <div class="view-header">
            <section class="content-header">
              <ol class="breadcrumb">
                <li><a href="/dashboard" class=""><i class="fa fa-tachometer"></i> <span>Dashboard</span></a></li>
                <li class="active text-capitalize">Task</li>
              </ol>
            </section>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12">
          <transition name="page" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
      <!-- /.content -->
    </div>
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
export default {
  name: 'va-content-wrap',
  created() {

  }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="wrapper">
    <va-navibar></va-navibar>
    <va-slider></va-slider>
    <va-content-wrap></va-content-wrap>
    <Footer></Footer>
    <Modal></Modal>
    <div class="bottom-menu">
      
      <a href="#" class="menu-item" data-toggle="push-menu">
        <span class="home-icon"><i class="fa fa-home"></i></span>
        Home
      </a>
    </div>
  </div>
</template>

<script>
import VANaviBar from 'layouts/components/NaviBar.vue'
import Footer from 'layouts/components/Footer.vue'
import VASlider from 'layouts/components/Slider.vue'
import VAContentWrap from 'layouts/components/ContentWrap.vue'
import Modal from 'components/Modal.vue'
import store from 'vuex/store.js'

export default {
  name: 'app',
  data() {
    return {
      // slideMenuItems: slideMenuItems
    }
  },
  created() {
  },
  components: {
    'va-navibar': VANaviBar,
    'va-slider': VASlider,
    'va-content-wrap': VAContentWrap,
    Footer,
    Modal
  },
  store
}
</script>

<style></style>

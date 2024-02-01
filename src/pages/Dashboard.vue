<template>
  <div class="dashboard">
    <row>
      <div class="col-lg-3 col-xs-6">
        <va-small-box
          color="aqua"
          icon="ion-bag"
          title="150"
          description="New Order"
          @more-click="clickToSmallBox"
          moreText="More info">
        </va-small-box>
      </div>
      <div class="col-lg-3 col-xs-6">
        <va-small-box
          color="green"
          icon="ion-stats-bars"
          title="53%"
          description="Bounce Rate"
          moreText="More info">
        </va-small-box>
      </div>
      <div class="col-lg-3 col-xs-6">
        <va-small-box
          color="yellow"
          icon="ion-person-add"
          title="44"
          description="User Registrations"
          moreText="More info">
        </va-small-box>
      </div>
      <div class="col-lg-3 col-xs-6">
        <va-small-box
          color="red"
          icon="ion-pie-graph"
          title="65"
          description="Unique Visitors"
          moreText="More info">
        </va-small-box>
      </div>
    </row>
    <row>
      <div class="col-lg-3 col-xs-6">
        <va-info-box
          bgColor="bg-aqua"
          bgIcon="ion ion-ios-gear-outline"
          text="CPU TRAFFIC"
          number="90"
          numberType="percentage"
        ></va-info-box>
      </div>
      <div class="col-lg-3 col-xs-6">
        <va-info-box
          bgColor="bg-red"
          bgIcon="fa fa-google-plus"
          text="LIKES"
          number="41,410"
        ></va-info-box>
      </div>
      <div class="col-lg-3 col-xs-6">
        <va-info-box
          bgColor="bg-green"
          bgIcon="ion ion-ios-cart-outline"
          text="SALES"
          number="760"
        ></va-info-box>
      </div>
      <div class="col-lg-3 col-xs-6">
        <va-info-box
          bgColor="bg-yellow"
          bgIcon="ion ion-ios-people-outline"
          text="NEW MEMBERS"
          number="2,000"
        ></va-info-box>
      </div>
    </row>
  </div>
</template>

<script>
import VAInfoBox from '../widgets/VAInfoBox.vue'
import VASmallBox from '../widgets/VASmallBox.vue'
import VAChatBox from '../widgets/VAChatBox.vue'
import VATodoList from '../widgets/VATodoList.vue'
import VAQuickMail from '../widgets/VAQuickMail.vue'
import VACalendar from '../widgets/VACalendar.vue'

export default {
  name: 'dashboard',
  data () {
    return {

    }
  },
  methods: {
    clickToSmallBox () {
      alert('click!!!: clickToSmallBox')
    }
  },
  components: {
    'va-small-box': VASmallBox,
    'va-chat-box': VAChatBox,
    'va-todo-list': VATodoList,
    'va-quick-mail': VAQuickMail,
    'va-calendar': VACalendar,
    'va-info-box':VAInfoBox
  }
}

</script>

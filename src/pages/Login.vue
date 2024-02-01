<template>
  <div>
    <div class="col-xs-12 col-sm-6 col-sm-offset-4 col-md-4 col-md-offset-4 mar-top10">
      <div class="box box-default">
        <div class="box box-default">
          <div class="login-box-body">
            <div class="login-logo">
              <img class="logo-image-transparent" width="140" :src="require('@/assets/logo.png')" />
            </div>

            <p style="font-size: 17px" class="text-center">To do</p>

            <p class="login-box-msg"></p>
            <span v-if="errors">
              <div class="alert alert-danger" v-bind:key="ind" v-for="(error, ind) in errors">
                <i class="fa fa-warning">{{ error }}</i>
              </div>
            </span>
            <form role="form" method="POST" action="/login">
              <div class="form-group has-feedback" :class="{ 'has-error': form.errors.has('email') }">
                <input name="email" v-model="form.email" style="border-radius: 4px" type="email" class="form-control"
                  placeholder="email" required autofocus />
                <span class="glyphicon glyphicon-user form-control-feedback"></span>
              </div>

              <div class="form-group has-feedback" :class="{ 'has-error': form.errors.has('password') }">
                <input id="myInput" name="password" v-model="form.password" style="border-radius: 4px" type="password"
                  class="form-control" placeholder="Type Your Password" required />
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>

              </div>

              <div class="row">
                <div class="col-sm-12 text-center">
                  <label class="checkbox-inline">
                    <input name="remember" type="checkbox" />
                    Remember me
                  </label>

                  <label class="checkbox-inline">
                    <input type="checkbox" @click="showHidePassword()" />Show Password
                  </label>
                </div>
                <div class="col-sm-12 text-center">
                  <br />
                  <button type="submit" :disabled="form.busy || loginSuccess" @click.prevent="getLogin()"
                    style="max-width: 150px; text-align: center;border-radius: 5px"
                    class="btn btn-primary btn-block btn-sm btn-flat center-block">
                    <span v-if="loginSuccess">
                      <i class="fa fa-check"></i>Loading Dashboard...
                    </span>
                    <span v-else>
                      <img v-if="savingImage" class="img-width-20" :src="require('@/assets/3.gif')" />
                      Login
                    </span>
                  </button>
                </div>
                <!-- /.col -->
              </div>
            </form>
           <!--  <router-link :to="{ name: 'reset-link-form' }">Forgot Password?</router-link> -->
          </div>
          <!-- /.login-box-body -->

          <!-- /.login-box-footer -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {

  },

  data() {
    return {
      savingImage: false,
      loginSuccess: false,

      FULL_NAME: "",
      USER_TYPE: "",
      LOGO_PATH: "",
      collect_your_pass: false,

      errors: [],
      form: new Form({
        email: "",
        password: "",
        confirmed: 0,
        contact_number: "",
      }),
    };
  },
  methods: {
    async getLogin() {
      console.log(this.form);
      this.savingImage = true;
      this.loginSuccess = false;
      this.errors = [];
      this.form
        .post("auth/login")
        .then((response) => {
          console.log(response);
          this.$store.commit('UPDATE_USER_INFO',response.data.user)
          this.$store.commit('UPDATE_USER_TOKEN',response.data.accessToken)
          this.loginSuccess = true;
          this.$router.push('/dashboard')
          // window.location='/dashboard'
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 412) {
            this.errors = [error.response.data.message];
          }

          toast({
            type: "warning",
            title: error.response.data.message,
          });
        })
        .finally(() => {
          this.savingImage = false;
        });
    },
    showHidePassword() {
      var x = document.getElementById("myInput");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
  },
  created() { },
};
</script>

<style>
.mar-top10 {
  margin-top: 10px;
}

.img-width-20 {
  width: 20px;
}
</style>

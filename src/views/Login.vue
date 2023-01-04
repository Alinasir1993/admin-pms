<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">

                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>sign in with credentials</small>
                            </div>
                            <form role="form" :rules="loginRules">
                                <base-input alternative
                                            type="email"
                                            class="mb-3"
                                            v-model="email"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            v-model="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <base-checkbox>
                                    Remember me
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" @click="HandleLogin">Sign In</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <small>Forgot password?</small>
                            </a>
                        </div>
                        <div class="col-6 text-right">
                          <router-link to="/register" class="text-light">Create new account</router-link>
<!--                            <a href="#" class="text-light">-->
<!--                                <small>Create new account</small>-->
<!--                            </a>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
// import { signin } from "@/api/user/users";
// import store from "/src/store/index"

export default {
  name: 'Register',
  props: {
  },
  data () {
    return {
      username: '',
      email:'',
      password:'',
      userErrors: [],
      loginRules: {
        username: {
          required: true,
          message: "Please enter the correct user name",
          trigger: "blur",
        },
        password: {
          required: true,
          message: "The password can not be less than 6 digits",
          trigger: "blur",
        },
      },
    }
  },
  methods: {
     HandleLogin () {
      const loginUser = {
        email: this.email,
        password: this.password,
      }
       this.$store.dispatch("increment", 14)
      //     .then(() => {
      //       // setting pos_location _id in cookies => send this in userInfo action
      //       // Cookies.set('pos_location_id', this.loginForm.pos_location_id);
      //       this.$router.push({
      //         path:"/dashboard",
      //       });
      //     })
      //     .catch(() => {
      //       console.log("login error occurred");
      //     })
      //     .finally(() => {
      //       this.loading = false;
      //     });
    }
  }
};
</script>
<style>
</style>

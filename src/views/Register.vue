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
<!--                        <template>-->
<!--                            <div class="text-muted text-center mb-3">-->
<!--                                <small>Sign in with</small>-->
<!--                            </div>-->
<!--                            <div class="btn-wrapper text-center">-->
<!--                                <base-button type="neutral">-->
<!--                                    <img slot="icon" src="img/icons/common/github.svg">-->
<!--                                    Github-->
<!--                                </base-button>-->

<!--                                <base-button type="neutral">-->
<!--                                    <img slot="icon" src="img/icons/common/google.svg">-->
<!--                                    Google-->
<!--                                </base-button>-->
<!--                            </div>-->
<!--                        </template>-->
                        <template>
                          <span v-for="validation in userErrors" :key="validation.id">
                             <h6>{{ validation }}</h6><br>
                          </span>
                            <div class="text-center text-muted mb-4">
                                <small>sign up with credentials</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            type="text"
                                            class="mb-3"
                                            v-model="username"
                                            placeholder="Name"
                                            addon-left-icon="ni ni-hat-3">
                                </base-input>
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
                                <div class="text-muted font-italic">
                                    <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small>
                                </div>
                                <base-checkbox>
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" @click="hanldeSignup">Create account</base-button>
                                </div>
                                <span>Already have account? <router-link to="/login">Sign In</router-link></span>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { signup } from '@/api/user/users';
export default {
  name: 'Register',
  props: {
  },
  data () {
    return {
      username:'',
      email:'',
      password:'',
      userErrors: []
    }
  },
  methods: {
    hanldeSignup (e) {
      e.preventDefault()
      const userRegister = {
        name: this.username,
        email: this.email,
        password: this.password,
      }
      signup(userRegister)
          .then((response) => {
            console.log('success', response);
            if (response.data.success === true) {
              this.$router.push('/dashboard')
            } else {
            }
          })
          .catch((err) => {
            this.userErrors = err.response.data.errors;
          })
          .finally(() => (this.loading = false))
    }
  }
};
</script>
<style>
</style>

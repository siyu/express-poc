<template>
  <div >
    <h1>Register</h1>

    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email" />
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password" />
    <br>
    <button @click="register">Register</button>
    <br>
    <div v-html="message" />
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'

export default {
  data () {
    return {
      email: 'abslkjfdslk',
      password: 'xes',
      message: null
    }
  },
  methods: {
    async register () {
      console.log('register button was clicked')
      const response = await AuthService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
      this.message = response.data.message
    }
  }
}
</script>


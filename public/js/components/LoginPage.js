export default {
    name: "loginPage",
    props: ['loginP'],
    data() {
      return {
        username: '',
        password: '',
        userLogin: false
      }
    },
    template: `
      <div class="logbox">
        <h2 class="login2">Once you login please provide your preferred name & message. <br> Someone will then be with you shortly!</h2>
        <form class="login">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required v-model="username">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required v-model="password">
          <button type="submit" @click.prevent="login()">Log In</button>
        </form>
      </div>
    `,
    methods: {
      login() {
        console.log(this.username, this.password);
        this.userLogin = true;
        console.log(this.loginP);
        this.$emit('login', true);
      }
    }
  }
  
<template>
  <div class="app-login">
    <div class="logo">
      <div class="logo-top">
        <i class="iconfont icon-bofang2"></i>
      </div>
      <div class="logo-bottom">
        <span class="iconfont icon-p">layer</span>
      </div>
    </div>
    <div class="loginGroup">
      <form @submit.prevent="login" autocomplete="off">
        <input type="text" name="userName" placeholder="Username" v-model="userName">
        <input type="password" name="pwd" placeholder="Password" v-model="password">
        <div class="msg">{{msg}}</div>
        <input :class="{click:status}" type="submit" value="Sign In">
      </form>
    </div>
    <div class="point">
      <span>Don't have an account?</span>
      <router-link to="/home" replace>Sign Up</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      data: [],
      userName: "",
      password: "",
      msg: "",
      status: false
    };
  },
  methods: {
    login() {
      this.status = true;
      this.$http
        .get("https://wd6476367811srrfgf.wilddogio.com/user.json")
        .then(res => {
          this.status = false;
          for (let key in res.data) {
            this.data.push(key);
          }
          this.data.forEach((item, key) => {
            if (
              this.userName == res.data[item].email &&
              this.password == res.data[item].password
            ) {
              this.$router.replace("/home");
            } else {
              if (key == this.data.length - 1) {
                this.msg = "Check your username and password is correct or not!";
              }
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.app-login {
  background: linear-gradient(to top, #1488fa, #60ccff);
  overflow: hidden;
  height: 100%;
  width: 100%;
}
@keyframes logoAnimation {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}

.logo {
  margin: 10.05rem auto 0;
  width: 100%;
}

.logo .logo-top {
  animation: logoAnimation 1s infinite alternate;
}

.logo .logo-top i {
  text-align: center;
  display: block;
  height: 3.4rem;
  width: 3.4rem;
  margin: 0 auto;
  font-size: 3.4rem;
  position: relative;
}

.logo .logo-top i::before {
  display: block;
  height: 100%;
  width: 100%;
  line-height: 3.4rem;
  color: #fff;
}

.logo .logo-bottom {
  box-sizing: border-box;
  width: 100%;
  padding: 1rem 6rem;
  text-align: center;
  color: #fff;
}

.logo .logo-bottom span {
  font-size: 1.55rem;
}

.loginGroup {
  width: 100%;
  box-sizing: border-box;
  padding: 0.825rem 1.875rem;
}

.loginGroup form input {
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.45rem;
  text-align: center;
  background: none;
  color: #fff;
  outline: none;
}

.loginGroup form input:nth-child(1),
.loginGroup form input:nth-child(2) {
  font-size: 0.7rem;
  border: none;
  border-bottom: 0.05rem solid #fff;
  opacity: 0.6;
}

.loginGroup form input:nth-child(1):focus,
.loginGroup form input:nth-child(2):focus {
  opacity: 1;
}

.loginGroup form input:nth-child(2) {
  margin-bottom: 0;
}

.loginGroup form .msg {
  font-size: 0.6rem;
  color: #fff;
  text-align: center;
  height: 3rem;
  line-height: 3rem;
  width: 100%;
}

.loginGroup form input:nth-child(4) {
  border-radius: 1.25rem;
  border: 0.05rem solid #fff;
  font-size: 0.875rem;
  transition: background 0.5s;
}

.loginGroup form input.click {
  background: #063564;
}

.loginGroup form input::-webkit-input-placeholder {
  color: #fff;
}

.loginGroup form input:-moz-input-placeholder {
  color: #fff;
}

.loginGroup form input::-moz-input-placeholder {
  color: #fff;
}

.loginGroup form input:-ms-input-placeholder {
  color: #fff;
}

.point {
  text-align: center;
  font-size: 0.6rem;
  color: #c8dbfd;
}

.point a {
  font-size: 0.65rem;
  margin-left: 0.55rem;
  color: #fff;
}
</style>


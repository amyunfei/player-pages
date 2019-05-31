<template>
  <div class="outsideBox">
    <app-header @passShow="receiveShow"></app-header>
    <div class="container">
        <div class="nav">Trending searches :</div>
        <div class="options">
            <span class="hot">Bank Account</span>
            <span class="hot">eminem</span>
            <span class="hot">los temerarios</span>
            <span>Cank eccount</span>
            <span>prince</span>
            <span>Kendrick Lamar</span>
            <span>Younger Now</span>
            <span>Slow Hands</span>
            <span>Lady GaGa</span>
            <span>maroon 5</span>
        </div>
    </div>
    <app-set :show="show" @hide="hide"/>
  </div>
</template>

<script>
import Setting from "../components/Setting/Setting";
import Header from "../components/Header/Header";
export default {
  components: {
    "app-set": Setting,
    "app-header": Header
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    hide() {
      this.show = false;
    },
    receiveShow(msg) {
      this.show = msg;
    }
  }
};
</script>
<style scoped>
.outsideBox {
  min-width: 320px;
  margin: 0 auto;
  overflow: hidden;
}
.outsideBox .container {
  box-sizing: border-box;
  padding: 0 1rem;
  margin-top: 7.25rem;
  width: 100%;
  overflow: hidden;
  color: #bbb;
}
.outsideBox .container .nav{
    height: 2rem;
    font-size: 1rem;
    line-height: 2rem;
}
.outsideBox .container .options{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.outsideBox .container .options span{
    display: inline-block;
    padding: 0.4rem;
    font-size: 0.8rem;
    border: 1px solid #bbb;
    border-radius: 0.6rem;
    margin: 0.2rem;
}
.outsideBox .container .options span.hot{
    color: rgb(38, 40, 170);
    border-color: rgb(38, 40, 170);
}
.app.nightMode .outsideBox .container{
    color: #fff;
}
.app.nightMode .outsideBox .container .options span.hot{
    color: rgb(143, 50, 230);
    border-color: rgb(143, 50, 230);
}
</style>

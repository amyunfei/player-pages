<template>
  <div class="outsideBox">
    <app-header @passShow="receiveShow"></app-header>
    <div class="container">
      <div class="nav">Classification of songs</div>
      <div class="classify" ref="classifyBox">
        <div
          :class="{'select': selectIndex == index}"
          v-for="(item,index) in list"
          :key="index"
          :style="{'background':`url(${item.pic})`}"
          @touchstart="ob(index)"
        >
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
    <div class="mengBand" @touchstart="reset" :class="{'hide': mbHide}"></div>
    <app-set :show="show" @hide="hide"/>
  </div>
</template>
<script>
import Setting from "../components/Setting/Setting";
import Header from "../components/Header/Header";
import { mapState } from "vuex";
export default {
  data() {
    return {
      show: false,
      mbHide: true,
      selectIndex: -1
    }
  },
  methods: {
    hide() {
      this.show = false;
    },
    receiveShow(msg) {
      this.show = msg;
    },
    ob(index) {
      this.selectIndex = index;
      this.mbHide = false;
    },
    reset() {
      this.selectIndex = -1;
      this.mbHide = true;
    }
  },
  components: {
    "app-set": Setting,
    "app-header": Header
  },
  computed: {
    ...mapState(["list"])
  },
  mounted() {
    let divArr = this.$refs.classifyBox.getElementsByTagName("div");
    //   console.log(divArr)
    for (let i = 0; i < divArr.length; i++) {
      let x = Math.random() * 2 + 12 * i + "%";
      let y = Math.random() * i * 6 + 40 + "%";
      divArr[i].style.backgroundSize = "100% 100%";
      divArr[i].style.left = x;
      divArr[i].style.top = y;
      divArr[i].style.zIndex = i;
      this.$nextTick(function() {
        divArr[i].style.transform =
          "rotate(" + (Math.random() * 180 - 90) + "deg)";
      });
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
  margin-top: 7.25rem;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(to bottom,#59a8ee,#fff)
}
.app.nightMode .outsideBox .container{
  background: linear-gradient(to bottom,#162533,rgb(23, 23, 36))
}
.outsideBox .container .nav {
  font-size: 1rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
  color: rgb(255, 255, 255);
}
.outsideBox .container .classify > div {
  display: inline-block;
  height: 6rem;
  width: 4.5rem;
  position: absolute;
  overflow: hidden;
  background-size: 100% 100%;
  transition-property: transform,top,left;
  transition-duration: 1s;
}
.outsideBox .container .classify > div > p {
  text-align: center;
  font-size: 0.6rem;
  height: 1rem;
  line-height: 1rem;
  width: 100%;
  color: #fff;
  position: absolute;
  top: 70%;
  left: 0;
  background: #000;
  opacity: 0.7;
}
.outsideBox .container div.classify > div.select {
  z-index: 55 !important;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, 0) rotate(0deg) scale(2, 2) !important;
}
.mengBand {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 50;
  background: #000;
  opacity: 0.3;
  transition: all 1s;
}
.mengBand.hide {
  display: none;
}
</style>


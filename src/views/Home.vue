<template>
  <div class="outsideBox">
    <app-header @passShow='receiveShow'></app-header>
    <div class="scroll-banner">
      <div class="banner">
        <div class="banner-title">
          <span>POPULAR ARTISTS</span>
          <span>VIEW ALL</span>
        </div>
        <div class="swiper-container">
          <ul class="banner-list swiper-wrapper">
            <router-link
              :to="'/singer/' + index"
              tag="li"
              class="banner-item swiper-slide"
              v-for="(singer,index) in music"
              :key="index"
            >
              <img :src="singer.imgH" alt>
              <div class="item-des">
                <span>{{singer.name}}</span>
                <span>{{singer.num}}</span>
              </div>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
    <div class="scroll-content">
      <div class="content-title">
        <span>LATEST ALBUM</span>
        <span>VIEW ALL</span>
      </div>
      <ul class="content-list">
        <router-link :to="'/album/' + index" class="content-item" v-for="(item,index) in album" :key="index">
          <div class="pic">
            <img :src="item.imgH" alt>
          </div>
          <div class="des">
            <p>{{item.al}}</p>
            <p>{{item.singer}}</p>
          </div>
        </router-link>
      </ul>
    </div>
    <app-set :show="show" @hide="hide"/>
  </div>
</template>


<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import { mapState } from "vuex";
import Setting from "../components/Setting/Setting";
import Header from "../components/Header/Header"
export default {
  name: "home",
  data() {
    return {
      show: false
    };
  },
  methods: {
    hide() {
      this.show = false;
    },
    receiveShow(msg){
      this.show = msg
    }
  },
  components: {
    "app-set": Setting,
    "app-header": Header
  },
  computed: {
    ...mapState(["music", "album"])
  },
  mounted() {
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        slidesPerView: 3,
        freeMode: true,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true
      });
    });
  }
};
</script>

<style scoped>
.outsideBox {
  min-width: 320px;
  margin: 0 auto;
}
.outsideBox .scroll-banner {
  margin-top: 7.25rem;
  height: 11.25rem;
  width: 100%;
  overflow: hidden;
}

.outsideBox .scroll-banner .banner {
  width: 100%;
  position: relative;
  height: 11.25rem;
}

.outsideBox .scroll-banner .banner .banner-title {
  box-sizing: border-box;
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.outsideBox .scroll-banner .banner .banner-title span:nth-child(1) {
  font-weight: bolder;
  color: #333;
  font-size: 0.6rem;
}

.outsideBox .scroll-banner .banner .banner-title span:nth-child(2) {
  color: #2294ff;
  font-size: 0.5rem;
}
/* .swiper-container {
  width: 100%;
  overflow: hidden;
} */
.outsideBox .scroll-banner .banner .banner-list {
  /* position: absolute; */
  /* left: 0; */
  margin: 0;
  /* top: 2.5rem; */
  display: flex;
  /* justify-content: space-around; */
  /* width: 38.7rem; */
  height: 8.75rem;
  padding: 0 0.7rem;
  box-sizing: border-box;
}

.outsideBox .scroll-banner .banner .banner-list .banner-item {
  height: 100%;
  width: 5.75rem;
}

.outsideBox .scroll-banner .banner .banner-list .banner-item img {
  width: 5.75rem;
  height: 5.75rem;
  border-radius: 10px;
}

.outsideBox .scroll-banner .banner .banner-list .banner-item .item-des {
  width: 100%;
  height: 1.9rem;
  box-sizing: border-box;
  padding-top: 0.475rem;
}

.outsideBox .scroll-banner .banner .banner-list .banner-item .item-des span {
  display: block;
  color: #333;
}

.outsideBox
  .scroll-banner
  .banner
  .banner-list
  .banner-item
  .item-des
  span:nth-child(1) {
  font-weight: bolder;
  height: 0.65rem;
  line-height: 0.65rem;
  font-size: 0.65rem;
}

.outsideBox
  .scroll-banner
  .banner
  .banner-list
  .banner-item
  .item-des
  span:nth-child(2) {
  padding-top: 0.225rem;
  height: 0.55rem;
  font-size: 0.55rem;
  line-height: 0.55rem;
}

.outsideBox .scroll-content {
  box-sizing: border-box;
  width: 100%;
  padding: 0 1rem;
}

.outsideBox .scroll-content .content-title {
  width: 100%;
  border-top: 0.025rem solid #cacaca;
  height: 1.825rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.75rem;
}

.outsideBox .scroll-content .content-title span:nth-child(1) {
  color: #333;
  font-size: 0.6rem;
  font-weight: bolder;
}

.outsideBox .scroll-content .content-title span:nth-child(2) {
  color: #2294ff;
  font-size: 0.5rem;
}

.outsideBox .scroll-content .content-list {
  width: 100%;
  padding-bottom: 4rem;
}

.outsideBox .scroll-content .content-list .content-item {
  box-sizing: border-box;
  width: 100%;
  height: 4.25rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.outsideBox .scroll-content .content-list .content-item .pic {
  box-shadow: 0 0 20px #7d8f99;
  width: 4.25rem;
  height: 4.25rem;
}

.outsideBox .scroll-content .content-list .content-item .pic img {
  width: 100%;
  height: 100%;
}

.outsideBox .scroll-content .content-list .content-item .des {
  padding-left: 0.75rem;
  height: 1.75rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.outsideBox .scroll-content .content-list .content-item .des p {
  color: #333;
}

.outsideBox .scroll-content .content-list .content-item .des p:nth-child(1) {
  font-size: 0.675rem;
  font-weight: bolder;
}

.outsideBox .scroll-content .content-list .content-item .des p:nth-child(2) {
  font-size: 0.65rem;
}

@keyframes bounce {
  from,
  to {
    transform: translateY(0.75rem) scaleY(0.9);
  }
  80% {
    transform: translateY(0rem) scaleY(1.02);
  }
}

.app.nightMode .outsideBox {
  background: #282830;
}
.app.nightMode
  .outsideBox
  .scroll-banner
  .banner
  .banner-title
  span:nth-child(1) {
  color: #fff;
}

.app.nightMode
  .outsideBox
  .scroll-banner
  .banner
  .banner-title
  span:nth-child(2) {
  color: #4d85c4;
}

.app.nightMode
  .outsideBox
  .scroll-banner
  .banner
  .banner-list
  .banner-item
  .item-des
  span {
  color: #fff;
}

.app.nightMode .outsideBox .scroll-content .content-title {
  border-top: 0.025rem solid #cacaca;
}

.app.nightMode .outsideBox .scroll-content .content-title span:nth-child(1) {
  color: #fff;
}

.app.nightMode .outsideBox .scroll-content .content-title span:nth-child(2) {
  color: #2294ff;
}

.app.nightMode .outsideBox .scroll-content .content-list .content-item .pic {
  box-shadow: 0 0 20px #ae83d1;
}

.app.nightMode .outsideBox .scroll-content .content-list .content-item .des p {
  color: #fff;
}
</style>


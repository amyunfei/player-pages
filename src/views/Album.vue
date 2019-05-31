<template>
  <div class="container">
    <div class="top">
      <div class="banner">
        <div class="ban-title">
          <i class="iconfont icon-houtuiqianjin" @touchstart="backHome"></i>
          <span>Explore</span>
        </div>
        <div class="ban-pic">
          <img :src="album[$route.params.id].imgH" alt>
          <div class="pic-des">
            <p>{{album[$route.params.id].al}}</p>
            <p>{{album[$route.params.id].singer}}</p>
          </div>
        </div>
      </div>
      <div class="nav">
        <div class="nav-content">
          <span>Playlist</span>
          <i class="iconfont icon-caidan"></i>
        </div>
      </div>
    </div>
    <div class="music">
      <ul class="music-list">
        <li
          class="music-item"
          v-for="(item,index) in album[$route.params.id].songs"
          :key="index"
          :class="{'current': listMark ? index == playIndex : 0}"
          @touchstart="listStart($event)" @touchend="listEnd($event,index)"
        >
          <div class="music-l">
            <div class="m-num">{{index + 1}}</div>
            <div class="m-name">
              <p>{{item.sname}}</p>
              <p>{{item.album}}</p>
            </div>
          </div>
          <div class="music-r">
            <i class="iconfont icon-more"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="load-pic"></div>
      <div class="progress">
        <div class="progress-back">
          <div class="progress-front"></div>
        </div>
      </div>
      <div class="left">
        <img src alt>
        <div class="music-name">
          <p>Body Complex</p>
          <p>Heathered Pearls</p>
        </div>
      </div>
      <div class="right">
        <i class="iconfont icon-xiayishou"></i>
        <i class="iconfont icon-bofang1"></i>
      </div>
    </div>
    <!-- <app-control></app-control> -->
  </div>
</template>

<script>
// import Controler from "../components/Controler/Controler.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      touchTime: 0,
      touchDis: 0
    };
  },
  methods: {
    backHome() {
      this.$router.replace("/home");
    },
    listStart(e) {
      this.touchDis = e.changedTouches[0].pageY;
      this.touchTime = Date.now();
    },
    listEnd(e, index) {
      this.touchDis = Math.abs(e.changedTouches[0].pageY - this.touchDis);
      this.touchTime = Date.now() - this.touchTime;
      if (this.touchTime < 300 && this.touchDis < 10) {
        this.$store.commit("updateSaveList", this.album[this.$route.params.id])
        if (index == this.playIndex) {
          if (this.playState) {
            this.$store.commit("pause");
          } else {
            this.$store.commit("play");
          }
        } else {
          this.$store.commit("pause");
          this.$store.commit("changeIndex", index);
        }
      }
    }
  },
  computed: {
    ...mapState(["album", "playState", "playIndex"]),
    listMark(){
      return this.$store.state.saveList == this.album[this.$route.params.id]
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
}

.container .top {
  background: #fff;
  width: 100%;
  z-index: 10;
  position: fixed;
  top: 0;
}

.container .top .banner {
  overflow: hidden;
  width: 100%;
  height: 11.4rem;
  padding: 0 0.875rem;
  box-sizing: border-box;
}

.container .top .banner .ban-title {
  width: 6rem;
  height: 1.15rem;
  margin: 1.55rem 0 1.625rem;
  display: flex;
  align-items: center;
}

.container .top .banner .ban-title i {
  height: 100%;
  display: block;
  font-size: 1.2rem;
  line-height: 1rem;
}

.container .top .banner .ban-title span {
  display: block;
  font-size: 1.2rem;
  line-height: 1.15rem;
}

.container .top .banner .ban-pic {
  display: flex;
  align-items: flex-start;
}

.container .top .banner .ban-pic img {
  flex-shrink: 0;
  height: 7rem;
  width: 7rem;
}

.container .top .banner .ban-pic .pic-des {
  flex: 1;
  padding-top: 0.625rem;
  padding-left: 0.9rem;
}

.container .top .banner .ban-pic .pic-des p {
  overflow: hidden;
}

.container .top .banner .ban-pic .pic-des p:nth-child(1) {
  font-size: 1.2rem;
  font-weight: bolder;
}

.container .top .banner .ban-pic .pic-des p:nth-child(2) {
  font-size: 0.9rem;
}

.container .top .nav {
  width: 100%;
  box-sizing: border-box;
  height: 3.125rem;
  padding: 1.75rem 0.875rem 0;
}

.container .top .nav .nav-content {
  height: 100%;
  width: 100%;
  border-bottom: 0.05rem solid #c8c8c8;
  box-sizing: border-box;
  padding-right: 0.75rem;
  display: flex;
  justify-content: space-between;
}

.container .top .nav .nav-content span {
  font-size: 0.875rem;
  vertical-align: text-top;
  color: #333333;
  font-weight: 500;
}

.container .top .nav .nav-content i {
  font-size: 0.875rem;
  color: #040101;
}

.container .music {
  z-index: 5;
  width: 100%;
  box-sizing: border-box;
  padding: 14.5rem 1.65rem 3.35rem 0.875rem;
}

.container .music .music-list {
  overflow: hidden;
  width: 100%;
}

.container .music .music-list .music-item.current {
  background: linear-gradient(to right, #9da0a7 0%, white 70%, white 100%);
}

.container .music .music-list .music-item {
  margin-top: 1.15rem;
  height: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container .music .music-list .music-item .music-l {
  height: 100%;
  display: flex;
}

.container .music .music-list .music-item .music-l .m-num {
  height: 100%;
  width: 0.6rem;
  font-size: 0.5rem;
  line-height: 1.5rem;
}

.container .music .music-list .music-item .music-l .m-name {
  padding-left: 0.875rem;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
}

.container .music .music-list .music-item .music-l .m-name p:nth-child(1) {
  font-size: 0.6rem;
  font-weight: bolder;
}

.container .music .music-list .music-item .music-l .m-name p:nth-child(2) {
  font-size: 0.525rem;
}

.container .music .music-list .music-item .music-r i {
  font-size: 1rem;
}

.container .footer {
  background: #fff;
  z-index: 10;
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  height: 3.25rem;
  width: 100%;
  padding: 0.525rem 1.275rem 0.525rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container .footer .load-pic {
  background-image: url("../assets/images/loadingsss.gif");
  background-size: 100% 100%;
  display: none;
  width: 1.95rem;
  height: 1.8rem;
  position: absolute;
  top: -1.75rem;
  left: 70%;
  transform: translateX(-50%);
}

.container .footer .progress {
  box-sizing: border-box;
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 0.5rem;
  background: #fff;
}

.container .footer .progress .progress-back {
  height: 0.025rem;
  background: #c8c8c8;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transition: height 0.5s;
}

.container .footer .progress .progress-back .progress-front {
  width: 0;
  height: 0.15rem;
  background: #2797ff;
  transition: height 0.5s;
}

.container .footer .progress .progress-back.touch {
  height: 0.125rem;
}

.container .footer .progress .progress-front.touch {
  height: 0.4rem;
}

.container .footer .left {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container .footer .left img {
  width: 2.2rem;
  height: 2.2rem;
}

.container .footer .left .music-name {
  height: 2.2rem;
  padding-left: 0.5rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

.container .footer .left .music-name p:nth-child(1) {
  font-size: 0.725rem;
  font-weight: 600;
}

.container .footer .left .music-name p:nth-child(2) {
  font-size: 0.525rem;
}

.container .footer .right {
  height: 100%;
  width: 3.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2797ff;
}

.container .footer .right i:nth-child(1) {
  font-size: 0.95rem;
}

.container .footer .right i:nth-child(2) {
  font-size: 1.2rem;
}

.app.nightMode .container {
  background: #000;
  color: #fff;
}

.app.nightMode .container .top {
  background: linear-gradient(to top, #000 0%, #313766 80%);
}

.app.nightMode .container .top .nav {
  background: transparent;
}

.app.nightMode .container .top .nav .nav-content {
  border-bottom: 0.05rem solid #fff;
}

.app.nightMode .container .top .nav .nav-content span {
  color: #fff;
}

.app.nightMode .container .top .nav .nav-content i {
  color: #fff;
}

.app.nightMode .container .music {
  background: #000;
}

.app.nightMode .container .music .music-list .music-item.current {
  background: linear-gradient(
    to right,
    #f04f04 0%,
    #0c678b 10%,
    #000 70%,
    #000 100%
  );
}

.app.nightMode .container .footer {
  background: linear-gradient(to bottom, #000 0%, #111533 80%);
}

.app.nightMode .container .footer .load-pic {
  background-image: url("../assets/images/loadN.gif");
  background-size: 100% 100%;
  display: none;
  width: 1.95rem;
  height: 2.5rem;
  top: -2.5rem;
}

.app.nightMode .container .footer .progress {
  background: transparent;
}

.app.nightMode .container .footer .progress .progress-back {
  background: #857e7e;
}

.app.nightMode .container .footer .progress .progress-back .progress-front {
  background: #ffffff;
}

.app.nightMode .container .footer .right {
  color: #fff;
}
</style>


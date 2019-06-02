<template>
  <div class="footer" :class="{'hide': $route.meta.hideControl}">
    <div class="load-pic"></div>
    <div
      class="progress"
      ref="proLine"
      @touchstart="down($event)"
      @touchmove.prevent.stop="move($event)"
      @touchend="up()"
    >
      <div class="progress-back" :class="{'touch':moveState}">
        <div :style="{'width':line + '%'}" class="progress-front" :class="{'touch':moveState}"></div>
      </div>
    </div>
    <div class="left">
      <img :src="saveList.imgH" alt>
      <div class="music-name">
        <p>{{saveList.songs[playIndex].sname}}</p>
        <p>{{saveList.songs[playIndex].album}}</p>
      </div>
    </div>
    <div class="right">
      <i class="iconfont icon-xiayishou" @touchstart="btnMark ? nextP(playIndex + 1) : null"></i>
      <i
        class="iconfont"
        :class="{'icon-bofang1':!playState,'icon-zanting':playState}"
        @touchstart="btnMark ? nextP(playIndex) : null"
      ></i>
    </div>
    <audio ref="audio" :src="saveList.source[playIndex]" @timeupdate="progress" autobuffer></audio>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      moveState: false,
      line: 0,
      proW: 0
    }
  },
  methods: {
    nextP(index) {//控制播放与暂停
      if (index == this.playIndex) {
        if(this.playState == false){
            this.$store.commit('play')
            return
        }else{
            this.$store.commit('pause')
            return
        }
      } else {
        this.$store.commit('pause')
        this.line = 0
        if (index > this.saveList.source.length - 1) {
          this.$store.commit('changeIndex',0)
        }else{
          this.$store.commit('changeIndex',index)
        }
      }
    },
    progress() { //播放时间百分比
      if (!Number.isNaN(this.$refs.audio.currentTime / this.$refs.audio.duration) && !this.moveState) {
        this.line = (
          (this.$refs.audio.currentTime / this.$refs.audio.duration) *
          100
        ).toFixed(2);
      }
      if (this.line >= 100) {
        this.$store.commit('pause')
        if(this.saveList.source.length == 1){
          setTimeout(()=>{
            this.nextP(this.playIndex)
          },0)
        }else{
          this.nextP(this.playIndex + 1)
        }
      }
    },
    down(e){//按下事件
      this.moveState = true;
      this.proW = this.$refs.proLine.offsetWidth;
      this.line = ((e.changedTouches[0].pageX / this.proW) * 100).toFixed(2);
    },
    move(e){//移动
      this.line = ((e.changedTouches[0].pageX / this.proW) * 100).toFixed(2);
    },
    up(){//抬起
      this.$refs.audio.currentTime = (this.$refs.audio.duration * this.line) / 100;
      this.moveState = false;
    }
  },
  computed: {
      ...mapState(['playState','playIndex','saveList']),
      path(){
        return this.$route.meta.hideControl
      },
      btnMark(){
        if(this.saveList.source[0] == 'http://xia2.kekenet.com/Sound/song/Bandari/Bandari36.mp3'){
          return false
        }else{
          return true
        }
      }
  },
  watch: {
      playState(){//检测播放或停止
          let that = this
          this.playState && setTimeout(function(){
            that.$refs.audio.play()
          },0)
          this.playState || setTimeout(function(){
            that.$refs.audio.pause()
          },0)
      },
      playIndex(){
        this.nextP(this.playIndex)
      },
      saveList(){
        this.$store.commit('play')
      }
  },
  beforeCreate() {
    if(!this.playState){
      this.$store.commit('updateSaveList',this.$store.state.blank)
    }
  }
};
</script>

<style scoped>
.app .footer {
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

.app .footer .load-pic {
  background-image: url("../../assets/images/loadingsss.gif");
  background-size: 100% 100%;
  display: none;
  width: 1.95rem;
  height: 1.8rem;
  position: absolute;
  top: -1.75rem;
  left: 70%;
  transform: translateX(-50%);
}

.app .footer .progress {
  box-sizing: border-box;
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 0.5rem;
  background: #fff;
}

.app .footer .progress .progress-back {
  height: 0.025rem;
  background: #c8c8c8;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transition: height 0.5s;
}

.app .footer .progress .progress-back .progress-front {
  width: 0;
  height: 0.15rem;
  background: #2797ff;
  transition: height 0.5s;
}

.app .footer .progress .progress-back.touch {
  height: 0.125rem;
}

.app .footer .progress .progress-front.touch {
  height: 0.4rem;
}

.app .footer .left {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app .footer .left img {
  width: 2.2rem;
  height: 2.2rem;
}

.app .footer .left .music-name {
  height: 2.2rem;
  padding-left: 0.5rem;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
}

.app .footer .left .music-name p:nth-child(1) {
  font-size: 0.725rem;
  font-weight: 600;
}

.app .footer .left .music-name p:nth-child(2) {
  font-size: 0.525rem;
}

.app .footer .right {
  height: 100%;
  width: 3.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2797ff;
}

.app .footer .right i:nth-child(1) {
  font-size: 0.95rem;
}

.app .footer .right i:nth-child(2) {
  font-size: 1.2rem;
}
.app.nightMode .footer {
  background: linear-gradient(to bottom, #000 0%, #292e5e 100%);
  color: #fff;
}

.app.nightMode .footer .load-pic {
  background-image: url("../../assets/images/loadN.gif");
  background-size: 100% 100%;
  display: none;
  width: 1.95rem;
  height: 2.5rem;
  top: -2.5rem;
}

.app.nightMode .footer .progress {
  background: transparent;
}

.app.nightMode .footer .progress .progress-back {
  background: #857e7e;
}

.app.nightMode .footer .progress .progress-back .progress-front {
  background: #ffffff;
}

.app.nightMode .footer .right {
  color: #ffffff;
}
.app .footer.hide{
  bottom: -3.25rem
}
</style>


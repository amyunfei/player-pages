<template>
  <div class="setting">
    <div class="coverBand" @touchstart.prevent="hide" :class="{show:show}"></div>
    <div class="options" @touchstart.prevent :class="{show:show}">
      <div class="options-header">
        <img src="../../assets/images/userHeader.jpg" alt>
        <p>Player</p>
      </div>
      <ul class="options-content">
        <li class="options-item iconfont icon-gouwu">Shopping Mall</li>
        <li class="options-item iconfont icon-naozhong">Timing</li>
        <li class="options-item iconfont icon-saoyisao">QR code</li>
        <li class="options-item iconfont icon-yunpan">Cloud disk</li>
        <li class="options-item iconfont icon-youxi">Game</li>
        <li class="options-item iconfont icon-location">Nearby</li>
      </ul>
      <div class="option-set">
        <p class="iconfont" :class="{'icon-yejianmoshi-': !nightMode,'icon-rijianmoshi':nightMode}" @touchstart="changeMode">{{nightMode ?'Day Mode' : 'Night Mode'}}</p>
        <p class="iconfont icon-shezhi">Settings</p>
        <p class="iconfont icon-daiji">Exit</p>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    props:{
        show: Boolean
    },
    methods: {
        hide(){
            this.$emit('hide')
        },
        changeMode(){
          this.$store.commit('changeModel')
        }
    },
    computed: {
      ...mapState(['nightMode'])
    },
}
</script>

<style scoped>
/* .setting{
    width: 100%;
    height: 100%;
} */
.outsideBox .coverBand.show {
  display: block;
}

.outsideBox .options.show {
  width: 50%;
}

.outsideBox .coverBand {
  display: none;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
}

.outsideBox .options {
  position: fixed;
  background: #fff;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0.75rem 0;
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 0 10% 10% 0;
  z-index: 100;
  transition: width 0.2s;
  color: #333;
}

.outsideBox .options .options-header {
  height: 4.5rem;
  overflow: hidden;
  box-sizing: border-box;
  border-bottom: 0.05rem solid #ccc;
}

.outsideBox .options .options-header img {
  display: block;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  margin: 0.25rem auto;
  box-shadow: 0 0 20px #333;
}

.outsideBox .options .options-header p {
  margin-top: 0.25rem;
  width: 100%;
  font-size: 0.9rem;
  text-align: center;
}

.outsideBox .options .options-content {
  width: 6.25rem;
  margin: 1rem auto 0;
}

.outsideBox .options .options-content .options-item {
  height: 1.25rem;
  background: linear-gradient(to right, #fff 0%, #f2f1f5 50%, #fff 100%);
  margin-bottom: 1rem;
  font-size: 0.65rem;
  line-height: 1.25rem;
  text-align: center;
  overflow: hidden;
}

.outsideBox .options .options-content .options-item::before {
  float: left;
}

.outsideBox .options .option-set {
  border-top: 0.05rem solid #ccc;
  width: 6.25rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.outsideBox .options .option-set p {
  height: 2rem;
  width: 100%;
  font-size: 0.75rem;
  line-height: 2rem;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.outsideBox .options .option-set p::before {
  position: absolute;
  left: 0;
}

.app.nightMode .outsideBox .coverBand.show {
  display: block;
}

.app.nightMode .outsideBox .options.show {
  width: 50%;
}

.app.nightMode .outsideBox .options {
  background: #211f44;
  color: #fff;
}

.app.nightMode .outsideBox .options .options-header {
  border-bottom: 0.05rem solid rgba(255, 255, 255, 0.5);
}

.app.nightMode .outsideBox .options .options-header img {
  box-shadow: 0 0 20px #fff;
}

.app.nightMode .outsideBox .options .options-content .options-item {
  background: linear-gradient(to right, #211f44 0%, #454281 50%, #211f44 100%);
}

.app.nightMode .outsideBox .options .option-set {
  border-top: 0.05rem solid rgba(255, 255, 255, 0.5);
}

.coverBand.show {
  display: block;
}

.options.show {
  width: 50%;
}
</style>

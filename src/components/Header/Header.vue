<template>
    <div class="header">
      <div class="title">
        <i class="iconfont icon-caidan" @touchstart="show"></i>
        <h3>Explore</h3>
      </div>
      <div class="search">
        <i class="iconfont icon-fangdajing"></i>
        <input type="search" placeholder="Search for artist, song or lyrics">
      </div>
    </div>
</template>

<script>
export default {
    methods: {
        show(){
            this.$emit('passShow',true)
        }
    },
}
</script>

<style scoped>
.outsideBox .header {
  width: 100%;
  height: 7.25rem;
  background: linear-gradient(to top, #208aff, #59a8ee);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
}

.outsideBox .header .title {
  width: 100%;
  box-sizing: border-box;
  height: 4.15rem;
  padding: 1.5rem 1rem;
  color: #fff;
  position: relative;
}

.outsideBox .header .title i {
  font-size: 1.15rem;
}

.outsideBox .header .title h3 {
  position: absolute;
  left: 50%;
  top: 1.5rem;
  transform: translateX(-50%);
  display: inline-block;
  font-size: 1.15rem;
}

.outsideBox .header .search {
  width: 100%;
  height: 2.25rem;
  box-sizing: border-box;
  padding: 0 1rem;
  position: relative;
}

.outsideBox .header .search i {
  position: absolute;
  height: 1rem;
  width: 1rem;
  font-size: 1rem;
  color: #4d85c4;
  top: 50%;
  left: 1.6rem;
  transform: translateY(-50%);
}

.outsideBox .header .search i::before {
  display: block;
  width: 100%;
  height: 100%;
}

.outsideBox .header .search input {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: none;
  border-radius: 1.125rem;
  outline: none;
  background: #a6d1ff;
  padding: 0 2.075rem;
  font-size: 0.65rem;
  line-height: 2.25rem;
}

.outsideBox .header .search input::-webkit-input-placeholder {
  color: #4d85c4;
}

.outsideBox .header .search input:-moz-input-placeholder {
  color: #4d85c4;
}

.outsideBox .header .search input::-moz-input-placeholder {
  color: #4d85c4;
}

.outsideBox .header .search input:-ms-input-placeholder {
  color: #4d85c4;
}
.app.nightMode .outsideBox .header {
  background: linear-gradient(to top, #050a1d, #002b50);
}

.app.nightMode .outsideBox .header .title {
  color: #fff;
}

.app.nightMode .outsideBox .header .search i {
  color: #4d85c4;
}
.app.nightMode .outsideBox .header .search input {
  background: #173350;
}

.app.nightMode .outsideBox .header .search input::-webkit-input-placeholder {
  color: #4d85c4;
}

.app.nightMode .outsideBox .header .search input:-moz-input-placeholder {
  color: #4d85c4;
}

.app.nightMode .outsideBox .header .search input::-moz-input-placeholder {
  color: #4d85c4;
}

.app.nightMode .outsideBox .header .search input:-ms-input-placeholder {
  color: #4d85c4;
}
</style>


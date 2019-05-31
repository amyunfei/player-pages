<template>
  <div class="footer">
    <div class="loading">
      <div class="loading-ball"></div>
    </div>
    <router-link to="/home" tag="i" class="iconfont icon-baseline-library_mus" replace :class="{current:$route.path == '/home'}"></router-link>
    <router-link to="/list" tag="i" class="iconfont icon-plist" replace :class="{current:$route.path == '/list'}"></router-link>
    <router-link to="/search" tag="i" class="iconfont icon-fangdajing" replace :class="{current:$route.path == '/search'}"></router-link>
    <router-link to="/my" tag="i" class="iconfont icon-My" replace :class="{current:$route.path == '/my/music' || $route.path == '/my/dynamics' || $route.path == '/my/about'}"></router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.app .footer {
  position: fixed;
  width: 100%;
  height: 3.25rem;
  box-sizing: border-box;
  padding-top: 0.8rem;
  bottom: 0;
  left: 0;
  color: #a1abb4;
  border-top: 0.025rem solid #cacaca;
  display: flex;
  justify-content: space-around;
  z-index: 10;
  background: #fff;
}

.app .footer .loading {
  display: none;
  position: absolute;
  width: 1.25rem;
  height: 2.5rem;
  right: 1.125rem;
  top: -2.5rem;
}

.app .footer .loading .loading-ball {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-image: radial-gradient(
    ellipse farthest-corner at 25% 25%,
    #2c80e0,
    #0d1942
  );
  margin: 0 auto;
  transform-origin: center bottom;
  animation: bounce 0.5s cubic-bezier(0.3, 2.4, 0.85, 2.5) infinite;
}

.app .footer i {
  display: inline-block;
  font-size: 1.825rem;
}

.app .footer i::berfor {
  vertical-align: text-top;
}

.app .footer i:nth-child(1) {
  margin-top: 0.1rem;
}

.app .footer i:nth-child(3) {
  font-size: 1.55rem;
  margin-top: 0.15rem;
}

.app .footer i.current {
  color: #2294ff;
}
.app.nightMode .footer {
  color: #fff;
  border-top: 0.025rem solid #cacaca;
  background: #0d0f22;
}
.app.nightMode .footer i.current {
  color: #332aa7;
}
</style>

<template>
  <div class="outsideBox">
    <div class="top">
      <div class="header">
        <div class="img"></div>
        <div class="des">
          <span>following 43</span>
          <span>follower 55</span>
        </div>
      </div>
    </div>
    <div class="nav">
      <router-link to="/my/music" tag="span" :class="{'current': $route.path == '/my/music'}" replace>Music</router-link>
      <router-link to="/my/dynamics" tag="span" :class="{'current': $route.path == '/my/dynamics'}" replace>Dynamics</router-link>
      <router-link to="/my/about" tag="span" :class="{'current': $route.path == '/my/about'}" replace>About</router-link>
      <div ref="mark" class="mark"></div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        
    },
    computed: {
        path(){
            return this.$route.path
        }
    },
    watch: {
        path(){
            if(this.path == '/my/music'){
                this.$refs.mark.style.transform = "translateX(115%)"
            }else if(this.path == '/my/dynamics'){
                this.$refs.mark.style.transform = "translateX(450%)"
            }else if(this.path == '/my/about'){
                this.$refs.mark.style.transform = "translateX(785%)"
            }
        }
    }
};
</script>
<style scoped>
.outsideBox {
  height: 100%;
  width: 100%;
}
.outsideBox .top {
  width: 100%;
  height: 11.5rem;
  background-image: url("../assets/images/background.jpg");
  background-size: 100% 100%;
  display: flex;
  align-items: flex-end;
}
.outsideBox .top .header {
  height: 60%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 30% 30% 0 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
}
.outsideBox .top .header .img {
  height: 3rem;
  width: 3rem;
  background: #ccc;
  border-radius: 50%;
  background: url("../assets/images/userHeader.jpg");
  background-size: 100% 100%;
}
.outsideBox .top .header .des {
  height: 1.5rem;
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.outsideBox .top .header .des span {
  width: 45%;
  text-align: center;
  font-size: 0.55rem;
  background: rgb(124, 120, 120);
  height: 1rem;
  line-height: 1rem;
  border-radius: 0.5rem;
  color: #fff;
}
.outsideBox .nav{
    width: 100%;
    position: relative;
}
.outsideBox .nav span{
    text-align: center;
    display: inline-block;
    width: 33.33%;
}
.outsideBox .nav span.current{
    color: rgb(5, 105, 219);
}
.outsideBox .nav .mark{
    position: absolute;
    height: 0.15rem;
    width: 10%;
    background: rgb(5, 105, 219);
    bottom: -0.1rem;
    transform: translateX(115%);
    transition: transform 0.3s;
}
.app.nightMode .outsideBox .nav span{
  color: #fff;
}
.app.nightMode .outsideBox .nav span.current{
  color: #3070f8;
}
.app.nightMode .outsideBox .nav .mark{
  background: #3070f8;
}
</style>

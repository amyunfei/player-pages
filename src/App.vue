<template>
  <div class="app" :class="{'nightMode':nightMode}">
    <router-view/>
    <app-footer v-show="$route.meta.showFooter"></app-footer>
    <app-control></app-control>
  </div>
</template>


<script>
import {mapState} from 'vuex'
import Footer from './components/Footer/Footer'
import Controler from './components/Controler/Controler'
export default {
  components: {
    "app-footer": Footer,
    "app-control": Controler
  },
  computed: {
    ...mapState(['nightMode'])
  },
}
</script>
<style>
html,
body,
.app{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
.app.nightMode{
  background: #282830;
}
</style>

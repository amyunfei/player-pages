<template>
  <audio ref="audio" :src="musicURL" @timeupdate="progress" autobuffer></audio>
</template>

<script>
export default {
  data() {
    return {
      line: 0
    };
  },
  props: ["stateP", "musicURL", "setTime"],
  watch: {
    stateP() {
      this.stateP || this.$refs.audio.play();
      this.stateP && this.$refs.audio.pause();
    },
    setTime() {
      if (this.$refs.audio != undefined && this.setTime != -1) {
        this.$refs.audio.currentTime = (this.$refs.audio.duration * this.setTime) / 100;
      }
    }
  },
  methods: {
    progress() {
      if (this.$refs.audio.currentTime) {
        this.line = (
          (this.$refs.audio.currentTime / this.$refs.audio.duration) *
          100
        ).toFixed(2);
        this.$emit("passPro", this.line);
      }
    }
  }
};
</script>
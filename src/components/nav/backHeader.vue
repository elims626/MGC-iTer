<template>
  <div class="">
    <div class="header_title">
      <img @click="goBack" class="margin_little icon_small float_left" src="../../assets/icon/return.png" alt="">
      <div class="font_black_big font_center font_bold">
        {{title}}
      </div>
    </div>
    <div style="height:1.6rem;">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      }
    },
    // props: ['title'],
    methods: {
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="less" scoped>
  .header_title{
    top: 0;
    position: fixed;
    z-index: 1000;
    opacity: 1;
    text-align: center;
    background: #eaeaea;
    height: 2.6rem;
    line-height: 2.6rem;
    width: 100%;
  }
</style>


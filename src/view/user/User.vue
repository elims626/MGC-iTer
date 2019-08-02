<template>
  <div class="public_box">
    <div class="img_header_box float_left">
      <img v-if="!this.userInfo.img" class="img_header img_border " src="../../assets/logo.png" alt="">
      <img v-if="this.userInfo.img" class="img_header img_border " :src="this.userInfo.img" alt="">
    </div>
    <div class="user_userinfo float_right">
      <span class="font_black_big font_bold">{{username}}</span><br>
      <div style="height:0.5rem;"></div>
      <span class="font_light_middle font_bold" style="color:#636363;">{{userId}}</span>
    </div>
    <headerNav :home_selected = 4 />
  </div>
</template>
<script>
  import headerNav from '../../components/nav/headerNav';
  export default {
    components: {
      headerNav,
    },
    data () {
      return {
        userInfo: '',
        username: '王蓓',
        userId: 'wangbei8'
      }
    }
  }
</script>

<style lang="less" scoped>
  .img_header_box{
    width: 30%;
    height: 100%;
  }
  .user_userinfo{
    width: 65%;
    margin-top: 1rem;
  }
</style>

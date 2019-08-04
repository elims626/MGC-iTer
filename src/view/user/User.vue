<template>
  <div>
    <img @click="goHr"  class="hr icon_middle_middle" src="../../assets/icon/hr.png">
    <headerNav :home_selected = 4 />
    <div class="public_box">
      <div class="img_header_box float_left">
        <img v-if="!this.userInfo.img" class="img_header img_border " src="../../assets/header.jpg" alt="">
        <img v-if="this.userInfo.img" class="img_header img_border " :src="this.userInfo.img" alt="">
      </div>
      <div class="user_userinfo float_right">
        <span class="font_black_big font_bold">{{username}}</span><br>
        <div style="height:0.5rem;"></div>
        <span class="font_light_middle font_bold" style="color:#636363;">{{userId}}</span>
      </div>
    </div>
    <div class="public_white_box border_radius">
      <div class="border_button margin_top" @click="goUserAlumnus">
        <div class="user_icon_text">
          <img src="../../assets/icon/user/notification.png" class="icon_middle_small icon_margin" alt="">
          <span class="font_black_middle user_type_text float_right margin_top">我的校友</span>
        </div>
        <div class="float_right user_icon_more">
          <img src="../../assets/icon/user/more.png" class="icon_small" alt="">
        </div>
      </div>
      <div class="border_button" @click="goUserGroup">
        <div class="user_icon_text">
          <img src="../../assets/icon/user/notification.png" class="icon_middle_small icon_margin" alt="">
          <span class="font_black_middle user_type_text float_right margin_top">我的小组</span>
        </div>
        <div class="float_right user_icon_more">
          <img src="../../assets/icon/user/more.png" class="icon_small" alt="">
        </div>
      </div>
      <div class="border_button" @click="goUserDepartment">
        <div class="user_icon_text">
          <img src="../../assets/icon/user/feedback.png" class="icon_middle_small icon_margin" alt="">
          <span class="font_black_middle user_type_text float_right margin_top">部门应届</span>
        </div>
        <div class="float_right user_icon_more">
          <img src="../../assets/icon/user/more.png" class="icon_small" alt="">
        </div>
      </div>
      <div class="border_button" @click="goUserLabel">
        <div class="user_icon_text">
          <img src="../../assets/icon/user/email.png" class="icon_middle_small icon_margin" alt="">
          <span class="font_black_middle user_type_text float_right margin_top">我的标签</span>
        </div>
        <div class="float_right user_icon_more">
          <img src="../../assets/icon/user/more.png" class="icon_small" alt="">
        </div>
        <div class="margin_little">
          <mt-badge size="large" type="primary"> 游 泳 </mt-badge>
          <mt-badge size="large" type="error"> 烹 饪 </mt-badge>
          <mt-badge size="large" type="success"> 健 身 </mt-badge>
          <mt-badge size="large" type="warning"> 电 竞 </mt-badge>
        </div>
        <div style="height: 0.5rem;"></div>
      </div>
    </div>

  </div>
</template>
<script>
  import { Badge } from 'mint-ui';
  import headerNav from '../../components/nav/headerNav';
  export default {
    components: {
      Badge,
      headerNav,
    },
    data () {
      return {
        userInfo: '',
        username: '王蓓',
        userId: 'wangbei8'
      }
    },
    methods: {
      goHr(){
        this.$router.push({path: '/hr'})
      },
      goUserAlumnus() {
        this.$router.push({path: '/userAlumnus'})
      },
      goUserDepartment() {
        this.$router.push({path: '/userDepartment'})
      },
      goUserGroup() {
        this.$router.push({path: '/userGroup'})
      },
      goUserLabel() {
        this.$router.push({path: '/userLabel'})
      }
    },
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
  .user_icon_text{
    width: 8rem;
  }
  .user_icon_more{
    margin-top: -2.5rem;
  }
  .label_tip{
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background: red;
  }
  label{
    height: 2.8rem;
    margin: 1rem;
    border-radius: 1rem;
    font-size: 20px;
    font-weight: bold;
    /*color: white;*/
    padding: 0.6rem 2.4rem;
  }
</style>

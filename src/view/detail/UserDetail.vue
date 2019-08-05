<template lang="html">
  <div class="">
    <backHeader :title="title"></backHeader>
<!--    <img class="tieba_img margin_little" src="../../assets/img/article.jpg" alt="">-->
    <div style="margin-top: 2rem;"></div>
    <div class="user_detail_box">
       <img style="height: 10rem; width: 100%;" src="../../assets/img/brg_user.jpg" alt="">
       <img class="img_header img_header_style" src="../../assets/header.jpg" alt="">
      <div class="margin_left" style="margin-left: 12%;">
        <div style="height: 1.4rem;"></div>
        <span class="font_black_big"> 姓名 ：</span>&nbsp;&nbsp;&nbsp;
        <span class="font_light_big">{{this.lists.graduateName}}</span>
        <div style="height: 0.4rem;"></div>
        <span class="font_black_big"> 性别 ：</span>&nbsp;&nbsp;&nbsp;
        <span class="font_light_big">{{this.lists.sex}}</span>
        <div style="height: 0.4rem;"></div>
        <span class="font_black_big"> 工号 ：</span>&nbsp;&nbsp;&nbsp;
        <span class="font_light_big">{{this.lists.number}}</span>
        <div style="height: 0.4rem;"></div>
        <span class="font_black_big"> 职位 ：</span>&nbsp;&nbsp;&nbsp;
        <span class="font_light_big">前端开发工程师</span>
        <div style="height: 0.4rem;"></div>
        <span class="font_black_big"> 学校 ：</span>&nbsp;&nbsp;&nbsp;
        <span class="font_light_big">{{this.lists.school}}</span>
        <div style="height: 0.4rem;"></div>
        <span class="font_black_big"> 部门 ：</span>&nbsp;&nbsp;&nbsp;
        <span class="font_light_big">{{this.lists.apartment}}</span>
        <div style="height: 0.4rem;"></div>
        <span class="font_black_big"> 手机号 ：</span>&nbsp;&nbsp;&nbsp;
        <span class="font_light_big">{{this.lists.phoneNumber}}</span>
        <div style="height: 0.4rem;"></div>
        <span class="font_black_big"> 邮箱 ：</span>&nbsp;&nbsp;&nbsp;
        <span class="font_light_big">{{this.lists.email}}</span><br>
      </div>
    </div>
  </div>
</template>
+
<script>
  import backHeader from '../../components/nav/backHeader';
  import { apiUserLists } from '../../api/test';
  export default {
    components: {
      backHeader,
    },
    data(){
      return {
        lists:[],
        title: '用户详情',
        id: this.$route.params.id
      }
    },
    created() {
      this.getUser();
    },
    methods: {
      getUser() {
        apiUserLists().then(res => {
          for(let i = 0; i<res.data.length; i++){
            if(this.id === res.data[i].number){
              this.lists = res.data[i];
            }
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.user_detail_box{
  min-height: 32rem;
  width: 90%;
  margin-left: 5%;
  box-shadow: 0 0 10px #527da5;
}
  .img_header_style{
    position: fixed;
    top: 8.0rem;
    border-radius: 50%;
    left: 38%;
  }
</style>

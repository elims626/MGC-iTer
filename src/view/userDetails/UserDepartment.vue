<template>
  <div class="public_content">
    <backHeader :title="title"></backHeader>
    <div class="alumnus_box margin_left margin_top"
         v-for="item in lists" :key="item.id" @click="goDetail(item.id)">
      <div class="alumnus_header float_left">
        <img class="header_img img_border" src="../../assets/header.jpg">
      </div>
      <div class="alumnus_content margin_left margin_little float_left">
        <span class="font_black_big">{{item.username}}</span>
        <br>
        <span class="font_light_middle">{{item.position}}</span>
        <span class="font_light_middle margin_left">{{item.department}}</span>
      </div>
    </div>
    <div style="position: fixed; width: 100%; bottom: 0;">
      <button class="add_btn btn">
        开  始  群  聊
      </button>
    </div>
  </div>
</template>
<script>
  import backHeader from '../../components/nav/backHeader';
  export default {
    components: {
      backHeader
    },
    data () {
      return {
        lists: [
          {
            id: 1,
            img: '',
            username: '张三',
            position: '前端开发工程师',
            department: '信息安全模块'
          },
          {
            id: 2,
            img: '',
            username: '李四',
            position: 'java开发工程师',
            department: '网络管理模块'

          },
          {
            id: 3,
            img: '',
            username: '王五',
            position: '应用工程师',
            department: '基础应用模块'
          },
        ],
        title: '基础架构与信息安全',
      }
    },
    methods: {
      // goDetail(id) {
      //   this.$route.push({
      //     name: 'userDetail',
      //     params:{
      //       id: id,
      //     }
      //   });
      //   console.log(id);
      // }
    }
  };
</script>
<style lang="less">
  .alumnus_box{
    height: 4.2rem;
    width: 95%;
    margin-bottom: 0.5rem;
    border-bottom: #999999 1px solid;
    .alumnus_header{
      width: 20%;
    }
    .alumnus_content{
      width: 75%;
    }
  }
</style>

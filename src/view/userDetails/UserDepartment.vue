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
      <button class="add_btn btn" @click="goChat">
        开  始  群  聊
      </button>
    </div>
  </div>
</template>
<script>
  import backHeader from '../../components/nav/backHeader';
  import axios from '@/libs/api.request'
  export default {
    components: {
      backHeader
    },
    data () {
      return {
        lists: [],
        title: '基础架构与信息安全',
      }
    },
    created() {
      this.getUserLists()
    },
    methods: {
      getUserLists() {
        axios.request({
          url: "/static/user.json",
        }).then( res =>{
          this.lists = res.data.grouplists;
        })
      },
      goChat() {
        this.$router.push({ path: '/chat'});
      },
      goDetail(id) {
        this.$router.push({
          name: 'userDetail',
          params:{
            id: id,
          }
        });
        // this.$router.push({ path: '/userDetail'});
      }
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

<template>
  <div class="public_content">
    <backHeader :title="title"></backHeader>
    <div class="alumnus_box margin_left margin_top"
         v-for="item in lists" :key="item.id" @click="goDetail(item.number)">
      <div class="alumnus_header float_left">
        <img class="header_img img_border" src="../../assets/header.jpg">
      </div>
      <div class="alumnus_content margin_left margin_little float_left">
        <span class="font_black_big">{{item.graduateName}}</span><br>
        <span class="font_light_middle">{{item.apartment}}</span>
      </div>
    </div>
    <br><br>
    <div style="position: fixed; width: 100%; bottom: 0;">
      <button class="add_btn btn" @click="goChat">
        开  始  群  聊
      </button>
    </div>
  </div>
</template>
<script>
  import backHeader from '../../components/nav/backHeader';
  import { apiUserLists } from '../../api/test';
  export default {
    components: {
      backHeader
    },
    data () {
      return {
        lists: [],
        title: '拓梦者',
      }
    },
    created() {
      this.getUser()
    },
    methods: {
      goChat() {
        this.$router.push({ path: '/chat'});
      },
      getUser() {
        apiUserLists().then(res=>{
          this.lists = res.data;
          // console.log(res.data)
        })
      },
      goDetail(id) {
        // this.$router.push({ path: '/userDetail'});
        this.$router.push({
          name: 'userDetail',
          params:{
            id: id,
          }
        });
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
    }
  }
</style>


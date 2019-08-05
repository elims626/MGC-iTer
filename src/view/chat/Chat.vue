<template>
  <div class="content">
    <backHeader :title="title"></backHeader>
    <div class="user_chats margin_top">
      <div class="chat_img_text margin_little" v-for="item in lists" :key="item.id">
        <div>
          <img src="../../assets/header.jpg" class="float_right icon_middle_big chat_img" alt="">
        </div>
         <div class="chat_text float_right margin_right">
           {{item.content}}
         </div>
      </div>
    </div>
    <div class="input_box">
      <div class="chat_input_box">
        <textarea v-model="content" class="chat_input font_black_big float_left" />
        <label @click="sendChats" class="float_left" style="margin-top: 0.7rem;width: 12%; color: #509EE3;">发送</label>
      </div>
      <img class="chat_icon" src="../../assets/img/chat_icon.jpg">
    </div>
  </div>
</template>
<script>
   import { Toast  }  from 'mint-ui'
  import backHeader from '../../components/nav/backHeader';
  export default {
    components: {
      backHeader,
    },
    data () {
      return {
        content: '',
        lists:[
          {
          content: '大家好'
        },{
            content: '很高兴认识大家'
          }
        ],
        title: '群聊名称（12）'
      }
    },
    methods: {
      sendChats() {
        if(this.content) {
          this.lists.push({
            content: this.content
          });
          this.content = ''
        } else {
          Toast("发送内容不能为空");
        }
      }
    }
  };
</script>
<style lang="less">
  .input_box{
    position: fixed;
    box-shadow: 0 0 10px #636363;
    background:#f0f0f0;
    bottom: 0;
  }
  .chat_input_box{
    border-radius: 1rem;
    font-size: 18px;
    width: 96%;
    margin-left: 2%;
    background: white;
    height: 2.6rem;
    overflow: hidden;
    .chat_input{
      font-size: 18px;
      width: 84%;
      height: 100%;
      outline: none;
      border-right-style: none;
      border-bottom-style: none;
    }
  }
  .chat_icon{
    width: 100%;
  }
  .user_chats{
    width: 96%;
    margin-left: 2%;
    min-height: 30rem;
  }
  .chat_img_text{
    overflow: hidden;
    min-height: 2.8rem;
    width: 100%;
    .chat_text{
      background: cornflowerblue;
      margin-top: 0.4rem;
      border-radius: 0.6rem;
      min-height: 1.8rem;
      color: white;
      padding: 0.2rem 0.4rem;
    }
    .chat_img{

    }
  }
</style>

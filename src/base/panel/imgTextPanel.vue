<template lang="html">
  <div class="user_imgText_box margin_top">
    <div class="user_imgText_left float_left">
      <div class="imgText_img">
        <slot name="picture">
          <img src="../../assets/photo/a.jpg" alt="">
        </slot>
      </div>
    </div>
    <div class="user_imgText_right float_right">
      <div class="font_black_middle">
        <slot name="title"></slot>
      </div>
      <div class="font_light_small">
        <slot name="time"></slot>
      </div>
      <div class="user_content font_light_small">
        点赞&nbsp;<slot name="zan">0</slot>&nbsp;&nbsp;&nbsp;
        评论&nbsp;<slot name="comment">0</slot>&nbsp;&nbsp;&nbsp;
        收藏&nbsp;<slot name="collect">0</slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="less" scoped>
  .user_imgText_box{
    width: 100%;
    height: 6rem;
  }
  .user_imgText_left{
    height: 100%;
    width: 35%;
    margin-left: 2%;
  }
  .imgText_img{
    height: 6rem;
  }
  img{
    width: 100%;
    height: 100%;
  }
  .user_imgText_right{
    height: 100%;
    width: 60%;
  }
  .user_content{
    position: relative;
    margin-top: 1.2rem;
  }
</style>

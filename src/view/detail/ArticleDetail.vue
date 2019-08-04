<template lang="html">
  <div class="">
    <backHeader :title="title"></backHeader>
    <img class="tieba_img margin_little" src="../../assets/img/article.jpg" alt="">
  </div>
</template>

<script>
  import backHeader from '../../components/nav/backHeader';
  export default {
    components: {
      backHeader,
    },
    data(){
      return {
        title: '新闻详情'
      }
    },
    methods: {
    }
  }
</script>

<style lang="less" scoped>
  .tieba_img{
    width: 100%;
    height: 100%;
  }
</style>

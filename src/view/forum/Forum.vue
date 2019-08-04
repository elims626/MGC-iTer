<template lang="html">
  <div class="">
    <img @click="goHr" class="hr icon_middle_middle" src="../../assets/icon/hr.png">
    <headerNav :home_selected = 3 />
    <img class="tieba_img" src="../../assets/img/tieba.jpg" alt="">
  </div>
</template>

<script>
  import headerNav from '../../components/nav/headerNav';
  export default {
    components: {
      headerNav,
    },
    data(){
      return {
      }
    },
    methods: {
      goHr(){
        this.$router.push({path: '/hr'})
      }
    }
  }
</script>

<style lang="less" scoped>
  .tieba_img{
    width: 100%;
    height: 100%;
  }
</style>



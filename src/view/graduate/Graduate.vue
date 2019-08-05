<template lang="html">
  <div class="">
    <img @click="goHr" class="hr icon_middle_middle" src="../../assets/icon/hr.png">
    <headerNav :home_selected = 2 />
<!--    <div class="align_center" style=" height:3.6rem;background: #CCCCCC">-->
<!--      <div style="height: 0.5rem;"></div>-->
<!--      <mt-button type="primary" size="normal" @click.native.prevent="active = 'tab-container1'">入职指引</mt-button>-->
<!--      <mt-button type="primary" size="normal" @click.native.prevent="active = 'tab-container2'">培训计划</mt-button>-->
<!--    </div>-->
      <div class="align_center" style=" height:7.2rem;">
        <img class="img_explore" src="../../assets/img/explore1.jpg" @click.prevent="active = 'tab-container1'">
        <img class="img_explore" src="../../assets/img/explore.jpg" @click.prevent="active = 'tab-container2'">
      </div>
    <mt-tab-container class="align_center page-tabbar-tab-container font_black_big" v-model="active" swipeable>
      <mt-tab-container-item id="tab-container1">
        <div class="explore_box margin_top">
          <span class="float_left">入职指引</span>
<!--            <mt-button type="primary" size="normal"> 入职指引 </mt-button>-->
          <div class="margin_little">
            <img style="height: 100%;width: 100%;" src="../../assets/img/plan1.png">
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <div class="explore_box margin_top">
          <span class="float_left">导师计划</span>
          <div class="margin_little">
            <img style="height: 100%;width: 100%;" src="../../assets/img/plan2.png">
            <img style="height: 100%;width: 100%;" src="../../assets/img/plan3.png">
          </div>
        </div>
        <div style="height: 2.8rem"></div>
      </mt-tab-container-item>
    </mt-tab-container>
    <div style="height: 1.2rem"></div>
  </div>
</template>

<script>
  import { TabContainer, Button, TabContainerItem } from 'mint-ui';
  import headerNav from '../../components/nav/headerNav';
  export default {
    components: {
      headerNav,
      Button,
      TabContainer,
      TabContainerItem
    },
    data(){
      return {
        active: 'tab-container1'
      }
    },
    methods: {
      goHr(){
        this.$router.push({path: '/hr'})
      }
    }
  }
</script>

<style lang="css" scoped>
  .img_explore{
    width: 46%;
    margin-left: 2%;
    border-radius: 2rem;
    box-shadow: 2px 2px 16px 0px #509EE3;
    height: 6.8rem;
  }
  .explore_box{
    min-height: 26.4rem;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 2px 2px 16px 0px #509EE3;
    border: 2px #9ad4ff solid;
  }
  .process_content{
    border: 1px solid lightskyblue;
    padding: 0.1rem 0.8rem;
  }
</style>


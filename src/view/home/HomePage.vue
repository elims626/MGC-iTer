<template lang="html">
  <div class="">
    <slider :img="img" :width="width" :height="height"></slider>

    <div class="public_white_box border_radius">
      <div class="align_center user_operate_list">
        <img class="icon_middle_small margin_top" src="../../assets/icon/home/yi.png" alt="">
        <div class="font_black_middle margin_buttom">
          集团
        </div>
      </div>
      <div class="align_center user_operate_list" >
        <img class="icon_middle_small margin_top" src="../../assets/icon/home/shi.png" alt="">
        <div class="font_black_middle margin_buttom">
          部门
        </div>
      </div>
      <div class="align_center user_operate_list">
        <img class="icon_middle_small margin_top" src="../../assets/icon/home/zhu.png" alt="">
        <div class="font_black_middle margin_buttom">
          公寓
        </div>
      </div>
      <div class="align_center user_operate_list" >
        <img class="icon_middle_small margin_top" src="../../assets/icon/home/xing.png" alt="">
        <div class="font_black_middle margin_buttom">
          周边
        </div>
      </div>
    </div>

    <div class="public_white_box border_radius">
      <div class="align_center user_operate_list">
        <img class="icon_middle_small margin_top" src="../../assets/icon/home/yi.png" alt="">
        <div class="font_black_middle margin_buttom">
          衣
        </div>
      </div>
      <div class="align_center user_operate_list" >
        <img class="icon_middle_small margin_top" src="../../assets/icon/home/shi.png" alt="">
        <div class="font_black_middle margin_buttom">
          食
        </div>
      </div>
      <div class="align_center user_operate_list">
        <img class="icon_middle_small margin_top" src="../../assets/icon/home/zhu.png" alt="">
        <div class="font_black_middle margin_buttom">
          住
        </div>
      </div>
      <div class="align_center user_operate_list" >
        <img class="icon_middle_small margin_top" src="../../assets/icon/home/xing.png" alt="">
        <div class="font_black_middle margin_buttom">
          行
        </div>
      </div>
    </div>
    <router-link v-for="item in lists" :key="item.id" :to="{
      name: 'articleDetail',
      params: {
        id: item.aid
      }
    }">
      <imgTextPanel >
        <img slot="picture" src="../../assets/photo/a.jpg" alt="">
<!--        <img slot="picture" v-if="item.article_img" :src="item.article_img" alt="">-->
        <span slot="time">2019-07-17</span>
        <span slot="title">应届生的职场养成</span>
        <span slot="zan">12</span>
        <span slot="comment">33</span>
        <span slot="collect">78</span>
      </imgTextPanel>
    </router-link>
    <div style="height: 3.2rem;"></div>
    <headerNav :home_selected = 1 />
  </div>
</template>

<script>
import slider from '../../components/lunbo/LunBo.vue';
import headerNav from '../../components/nav/headerNav';
import imgTextPanel from '../../base/panel/imgTextPanel';
export default {
    components: {
      headerNav,
      imgTextPanel,
      slider: slider,
    },
  data () {
    return {
      lists: [1,2,3,4,5],
      img: [
        {
          id: 5,
          src: 'https://i.loli.net/2019/05/21/5ce3738e87d9122161.jpg',
        },
        {
          id: 4,
          src: 'https://i.loli.net/2019/05/21/5ce3738e87d9122161.jpg',
        },
        {
          id: 3,
          src: 'https://i.loli.net/2019/05/21/5ce3732940a0954171.jpg',
        },
        {
          id: 2,
          src: 'https://i.loli.net/2019/05/21/5ce3738ebb28358843.jpg',
        },
      ],
        width: 460,
        height: 250
    }
  }
}
</script>

<style lang="less" scoped>
  .user_operate_list{
    display: inline-block;
    width: 23.8%;
    margin: auto;
  }
</style>

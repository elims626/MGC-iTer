<template lang="html">
  <div class="">
    <slider :img="img" :width="width" :height="height"></slider>

    <div class="public_white_box border_radius">
      <div class="align_center user_operate_list">
        <img class="icon_middle_small margin_top" src="../../assets/icon/home/集团.png" alt="">
        <div class="font_black_middle margin_buttom">
          集团
        </div>
      </div>
      <div class="align_center user_operate_list" >
        <img class="icon_middle_small margin_top" src="../../assets/icon/home/部门.png" alt="">
        <div class="font_black_middle margin_buttom">
          部门
        </div>
      </div>
      <div class="align_center user_operate_list">
        <img class="icon_middle_small margin_top" src="../../assets/icon/home/娱乐.png" alt="">
        <div class="font_black_middle margin_buttom">
          娱乐
        </div>
      </div>
      <div class="align_center user_operate_list" >
        <img class="icon_middle_small margin_top" src="../../assets/icon/home/周边.png" alt="">
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
        id: item.id
      }
    }">
      <imgTextPanel >
        <img slot="picture" :src="item.img" alt="">
        <img slot="picture" v-if="!item.img"  src="../../assets/photo/a.jpg" alt="">
        <span slot="time">{{item.time}}</span>
        <span slot="title">{{item.title}}</span>
        <span slot="zan">{{item.zan}}</span>
        <span slot="comment">{{item.comment}}</span>
        <span slot="collect">{{item.collect}}</span>
      </imgTextPanel>
    </router-link>
    <div style="height: 3.2rem;"></div>
    <img @click="goHr"  class="hr icon_middle_middle" src="../../assets/icon/hr.png">
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
      lists: [
        {
          img: 'https://b2.bmp.ovh/imgs/2019/08/80ad7c9f9854ae71.jpg',
          id: 1,
          title: '如何实现校园到职场的转变',
          time: '2019-07-17',
          zan: 127,
          comment: 56,
          collect: 37
        },
        {
          img: 'https://b2.bmp.ovh/imgs/2019/08/39dbfd17234661ce.jpg',
          id: 2,
          title: '美的对新员工培养计划',
          time: '2019-07-16',
          zan: 222,
          comment: 67,
          collect: 47
        },
        {
          img: 'https://b2.bmp.ovh/imgs/2019/08/268104bcdaf7b33f.jpg',
          id: 3,
          title: '走进美的，了解美的',
          time: '2019-07-15',
          zan: 782,
          comment: 372,
          collect: 138
        },
        {
          img: 'https://b2.bmp.ovh/imgs/2019/08/45b1ddc30b575e17.jpg',
          id: 4,
          title: '美的历史馆介绍',
          time: '2019-07-14',
          zan: 786,
          comment: 561,
          collect: 337
        },
        {
          img: 'https://b2.bmp.ovh/imgs/2019/08/30e3ddf30c29f937.jpg',
          id: 5,
          title: '关于美的对应届生的期望',
          time: '2019-07-13',
          zan: 1127,
          comment: 422,
          collect: 176
        },
        {
          img: 'https://b2.bmp.ovh/imgs/2019/08/c9adb3587a287da2.jpg',
          id: 6,
          title: '别人眼中的美的',
          time: '2019-07-12',
          zan: 645,
          comment: 433,
          collect: 123
        }
      ],
      img: [
        {
          id: 5,
          src: 'https://i.loli.net/2019/08/03/TlwcqLV6vIRZmOk.png',
        },
        {
          id: 4,
          src: 'https://i.loli.net/2019/08/03/MQ9aDxLIbJ3AmEw.png',
        },
        {
          id: 3,
          src: 'https://i.loli.net/2019/08/03/eLt24kirO5CXbc1.jpg',
        },
        {
          id: 2,
          src: 'https://i.loli.net/2019/08/03/ebijsQNpvlw7CMU.jpg',
        },
      ],
        width: 460,
        height: 250
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
  .user_operate_list{
    display: inline-block;
    width: 23.8%;
    margin: auto;
  }
</style>

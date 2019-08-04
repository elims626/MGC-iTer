<template>
  <div class="public_content brg_label">
    <backHeader :title="title"></backHeader>
    <div class=" align_center" style="margin-top:2rem;">
      <label v-if="!label1" class="red" @click="choose1">球类</label>
      <label v-if="label1" class="red" style="background: red" @click="choose1">球类</label>
      <label v-if="!label2" class="green" @click="choose2">健身</label>
      <label v-if="label2" class="green" style="background: green" @click="choose2">健身</label>
      <br><br><br>
      <label v-if="!label3" class="yellow" @click="choose3">游泳</label>
      <label v-if="label3" class="yellow" style="background:yellow" @click="choose3">游泳</label>
      <label v-if="!label4" class="blue" @click="choose4">烹饪</label>
      <label v-if="label4" class="blue" style="background: blue" @click="choose4">烹饪</label>
      <br><br><br>
      <label v-if="!label5" class="gold" @click="choose5">旅游</label>
      <label v-if="label5" class="gold" style="background: gold" @click="choose5">旅游</label>
      <label v-if="!label6" class="purple" @click="choose6">购物</label>
      <label v-if="label6" class="purple" style="background: purple" @click="choose6">购物</label>
      <br><br><br>
      <label v-if="!label7" class="black" @click="choose7">电影</label>
      <label v-if="label7" class="black" style="background: black" @click="choose7">电影</label>
      <label v-if="!label8" class="orange" @click="choose8">电竞</label>
      <label v-if="label8" class="orange" style="background: orange" @click="choose8">电竞</label>
    </div>
    <div class="margin_top margin_left margin_right">
      <div style="height: 17rem;"></div>
      <mt-button @click="labelsSubmit" type="primary" size="large">保存</mt-button>
    </div>
  </div>
</template>
<script>
  import { Button, MessageBox } from 'mint-ui';
  import backHeader from '../../components/nav/backHeader';
  export default {
    components: {
      backHeader,
      Button
    },
    data () {
      return {
        title: '我的标签',
        showLabel: false,
        label1: false,
        label2: false,
        label3: false,
        label4: false,
        label5: false,
        label6: false,
        label7: false,
        label8: false,
      }
    },
    methods: {
      showLabels() {
        this.showLabel = true;
      },
      labelsSubmit() {
        MessageBox('提示', '保存成功');
      },
      choose1() {
        this.label1 = !this.label1;
      },
      choose2() {
        this.label2 = !this.label2;
      },
      choose3() {
        this.label3 = !this.label3;
      },
      choose4() {
        this.label4 = !this.label4;
      },
      choose5() {
        this.label5 = !this.label5;
      },
      choose6() {
        this.label6 = !this.label6;
      },
      choose7() {
        this.label7 = !this.label7;
      },
      choose8() {
        this.label8 = !this.label8;
      }
    }
  };
</script>
<style lang="less">
  .brg_label{
    background: #f0f0f0;
  }
  label{
    height: 2.8rem;
    margin: 1rem;
    border-radius: 1rem;
    font-size: 20px;
    font-weight: bold;
    color: white;
    padding: 0.6rem 2.4rem;
  }
  .red{
    border: 2px solid red;
    background: pink;
  }
  .black{
    border: 2px solid black;
    background: brown;
  }
  .yellow{
    border: 2px solid yellow;
    background: lightsalmon;
  }
  .blue{
    border: 2px solid blue;
    background: lightblue;
  }
  .green{
    border: 2px solid green;
    background: lightgreen;
  }
  .purple{
    border: 2px solid purple;
    background: #bd9cff;
  }
  .orange{
    border: 2px solid orange;
    background: #999556;
  }
  .gold{
    border: 2px solid gold;
    background: #e1d1ff;
  }
</style>

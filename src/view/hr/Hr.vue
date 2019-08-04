<template>
  <div class="public_content">
    <backHeader :title="title"></backHeader>
<!--    <div style="height: 2.4rem;" class="margin_little">-->
<!--      <mt-search-->
<!--        v-model="value"-->
<!--        cancel-text="取消"-->
<!--        placeholder="搜索">-->
<!--      </mt-search>-->
<!--    </div>-->
    <div v-for="item in lists" :key="item.id" class="margin_top hr_box">
      <div class="margin_left font_black_big">
        {{item.problem}}
      </div>
      <div @click="seeResult(item.id, item.flag)" class="font_light_middle margin_right float_right">
        查看回答</div>
      <div style="min-height: 2rem; margin-bottom: 0.5rem;" class="margin_top margin_left font_light_middle" v-show="item.flag">
        {{item.answer}}
      </div>
    </div>
    <div class="hr_input">
      <input v-model="content" placeholder="你的疑问..." class="font_black_big hr_input_content" >
      <div class="btn_hr float_right">
        <mt-button @click="handleSubmit" type="primary">询问</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast , Search , Button} from 'mint-ui';
import backHeader from '../../components/nav/backHeader';
export default {
  components: {
    Search,
    Button,
    backHeader
  },
  data () {
    return {
      flag: false,
      content: [],
      id:5,
      lists: [{
        id: 1,
        flag: false,
        problem: '请问可以提前去报道么',
        answer: '可以',
      },
        {
          id: 2,
          flag: false,
          problem: '请问可以在家体检么',
          answer: '可以，必须是三甲医院',
        },
        {
          id: 3,
          flag: false,
          problem: '请问美的的工作氛围什么样',
          answer: '来了你就知道了哦',
        },
        {
          id: 4,
          flag: false,
          problem: 'hr小姐姐真好看',
          answer: '你也很好看哦',
        }],
      value: '',
      title: 'hr问答',
    }
  },
  methods: {
    handleSubmit() {
      Toast('已发送');
      this.lists.push({
        id: ++this.id,
        flag: false,
        problem: this.content,
        answer: '暂未回答',
      });
      this.content = ''
    },
    seeResult (id, flag) {
      if(flag === true){
        for (let i =0; i< this.lists.length; i++) {
          if(id === this.lists[i].id) {
            this.lists[i].flag = false;
          }
        }
      }
      else{
        for (let i =0; i< this.lists.length; i++) {
          if(id === this.lists[i].id) {
            this.lists[i].flag = true;
          }
        }
      }
    }
  }
};
</script>
<style lang="less">
.hr_box{
  width: 100%;
  min-height: 3.8rem;
  background: #c2ebd6;
  border-radius: 1rem;
}
  .hr_input{
    position: absolute;
    bottom: 0.6rem;
    height: 2.4rem;
    width: 100%;
    .hr_input_content{
      height: 2.4rem;
      width: 78%;
      outline: none;
    }
    .btn_hr{
      height: 2.4rem;
      width: 20%;
    }
  }

</style>

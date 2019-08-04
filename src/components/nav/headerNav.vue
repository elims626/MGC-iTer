<template lang="html">
  <div class="nav">
      <span class="navItems">
        <img v-if="!Button1" @click="home" class="icon_middle_icon" src="../../assets/icon/home.png" alt="">
        <img v-if="Button1" @click="home" class="icon_middle_icon" src="../../assets/icon/home_selected.png" alt="">
      </span>
    <span class="navItems">
        <img v-if="!Button2" @click="graduate" class="icon_middle_icon" src="../../assets/icon/student.png" alt="">
        <img v-if="Button2" @click="graduate" class="icon_middle_icon" src="../../assets/icon/student_selected.png" alt="">
      </span>
    <span class="navItems">
      <img v-if="!Button3" @click="forum" class="icon_middle_icon" src="../../assets/icon/shuoba.png" alt="">
      <img v-if="Button3" @click="forum" class="icon_middle_icon" src="../../assets/icon/shuoba_selected.png" alt="">
    </span>
    <span class="navItems">
        <img v-if="!Button4" @click="users" class="icon_middle_user" src="../../assets/icon/user.png" alt="">
        <img v-if="Button4" @click="users" class="icon_middle_user" src="../../assets/icon/user_selected.png" alt="">
      </span>
  </div>
</template>

<script>
  export default {
    props: ['home_selected'],
    created () {
      this.homeNav()
    },
    methods: {
      homeNav () {
        if (this.home_selected === 1) {
          this.Button1 = true
        } else if (this.home_selected === 2) {
          this.Button2 = true
        } else if (this.home_selected === 3) {
          this.Button3 = true
        } else if (this.home_selected === 4) {
          this.Button4 = true
        }
      },
      home () {
        this.Button1 = true;
        this.Button2 = false;
        this.Button3 = false;
        this.Button4 = false;
        this.$router.push({path: '/homepage'})
      },
      graduate () {
        this.Button1 = false;
        this.Button2 = true;
        this.Button3 = false;
        this.Button4 = false;
        this.$router.push({path: '/graduate'})
      },
      forum () {
        this.Button1 = false;
        this.Button2 = false;
        this.Button3 = true;
        this.Button4 = false;
        this.$router.push({path: '/forum'})
      },
      users () {
        this.Button1 = false;
        this.Button2 = false;
        this.Button3 = false;
        this.Button4 = true;
        this.$router.push({path: '/user'})
      }
    },
    data () {
      return {
        Button1: false,
        Button2: false,
        Button3: false,
        Button4: false
      }
    }
  }
</script>

<style lang="less">
  .nav {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0px;
    text-align: center;
    overflow: hidden;
    z-index: 1000;
    opacity: 1;
    background: #fff;
    box-shadow: 0 0 5px #ccc;
    height: 3.2rem;
    .navItems {
      display: block;
      float: left;
      width: 25%;
      height: 100%;
      color: #999;
      padding-top: 0.2rem;
    }
  }
  .icon_middle_icon{
    height: 2.8rem;
    width: 2.3rem;
  }
  .icon_middle_user{
    height: 2.8rem;
    width: 2.0rem;
  }
</style>

<template>
  <div class="login">
    <!--    导航栏-->
    <div class="navBarClass">
      <van-nav-bar title="网易严选">
        <template #left>
          <van-icon name="wap-home-o" size="64" @click="gotoHome"/>
        </template>
        <template #right>
          <van-icon name="search" size="64"/>
          <van-icon name="shopping-cart-o" size="64"/>

        </template>
      </van-nav-bar>
    </div>
    <!--    中间的图标-->
    <div class="logoWrap">
      <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" data-reactid=".0.1.0.1.0.0">
    </div>
    <!--    登录按钮-->
    <div class="btnWrap">
      <van-button type="danger" block icon="phone-o">手机号快捷登录</van-button>
      <van-button type="danger" plain block icon="envelop-o">邮箱帐号登录</van-button>
    </div>
    <!--  底部导航栏-->
    <Footer_bar></Footer_bar>
  </div>
</template>

<script>
import Footer_bar from "@/components/footer_bar";
import '../assets/css/resetVant.less'

export default {
  name: "login",
  components: {Footer_bar},
  methods: {
    /**
     * 回首页
     */
    gotoHome() {
      this.$router.push('/')
    },
  }
}
</script>

<style scoped lang="less">
.login {
  .logoWrap {
    text-align: center;
    padding-top: 2.13333rem;
    padding-bottom: 3.09333rem;

    img {
      width: 3.57333rem;
      height: 1.2rem;
    }
  }

  .btnWrap {
    padding: 0 .53333rem;
    margin-bottom: 2.73333rem;
  }
}
</style>

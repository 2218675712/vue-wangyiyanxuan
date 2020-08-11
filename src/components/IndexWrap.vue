<template>
  <div class="title-div">
    <van-row type="flex" justify="space-between">
      <van-col span="6">
        <img class="logo" src="../assets/img/logo-img.png">
      </van-col>
      <van-col span="15" class="search-div">
        <van-icon name="search" size=".5rem"></van-icon>
        <span>请输入用户名</span>
      </van-col>
      <van-col span="3">
        <van-button class="loginBtn" type="primary" size="mini">登录</van-button>

      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "IndexWrap"
}
</script>

<style scoped lang="less">
.title-div {
  padding: .21333rem .4rem;

  .logo {
    display: inline-block;
    width: 1.84rem;
    height: .53333rem;
    margin-top: .1rem;

  }

  .search-div {
    background-color: #ededed;
    border-radius: .10667rem;
    height: .74667rem;
    font-size: .37333rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loginBtn {
    width: .98667rem;
    height: .53333rem;
    line-height: .53333rem;
    text-align: center;
    color: #dd1a21;
    border: 1px solid #dd1a21;
    border-radius: .10667rem;
    margin-left: .21333rem;
    font-size: .32rem;
    background-color: #fff;
    margin-top: .1rem;
  }
}


</style>

<template>
  <div class="title-div">
    <van-row type="flex" justify="space-between">
      <van-col span="6">
        <img class="logo" src="../assets/img/logo-img.png">
      </van-col>
      <van-col
          span="15"
          class="search-div"
          @click="searchBtnFn">
        <van-icon name="search" size=".5rem"></van-icon>
        <span>请输入用户名</span>
      </van-col>
      <van-col span="3">
        <van-button class="loginBtn" type="primary" size="mini">登录</van-button>
      </van-col>
    </van-row>
    <van-tabs v-model="active" swipeable class="tabBtnWrap">
      <van-tab v-for="(item,index) in tabBtnArr" :key="index" :title="item">
        内容 {{ item }}
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import '../assets/css/resetVant.less';

export default {
  name: "IndexWrap",
  data() {
    return {
      active: '',
      tabBtnArr: ''
    }
  },
  created() {
    this.axios.get('get_tabBtn_list').then(_d => {
      this.tabBtnArr = _d.data
    })
  },
  methods: {
    searchBtnFn() {
      this.$router.push('/searchPage')
    }
  }
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

  .tabBtnWrap {
    font-size: .35rem;
  }

}


</style>

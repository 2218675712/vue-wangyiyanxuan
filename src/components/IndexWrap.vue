<template>
  <div class="title-div">
    <van-row type="flex" justify="space-between" style="padding: 0 .2rem">
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
      </van-tab>
    </van-tabs>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in swipe_imgArr" :key="index">
        <img :src="item">
      </van-swipe-item>

    </van-swipe>
    <div class="indexServicePolicy">
      <ul>
        <li><i style="background-image: url('http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png');"></i>网易自营品牌
        </li>
        <li>
          <i style="background-image: url('https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png');"></i>
          30天无忧退货
        </li>
        <li>
          <i style="background-image: url('https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png');"></i>
          48小时快速退款
        </li>
      </ul>
    </div>
    <div class="GoodsColumn_wrap">
      <van-grid :column-num="5">
        <van-grid-item v-for="(item,index) in goodsColumn_arr" :key="index" :icon="item.img_url" :text="item.img_txt"/>
      </van-grid>
    </div>
  </div>
</template>

<script>
import '../assets/css/resetVant.less';

export default {
  name: "IndexWrap",
  data() {
    return {
      active: '',
      tabBtnArr: '',
      swipe_imgArr: [],
      goodsColumn_arr: [
        {
          img_url: 'https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png',
          img_txt: '新品首发'
        }, {
          img_url: 'http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png',
          img_txt: '居家生活'
        }, {
          img_url: 'https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png',
          img_txt: '服饰鞋包'
        }, {
          img_url: 'http://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png',
          img_txt: '美食酒水'
        }, {
          img_url: 'https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png',
          img_txt: '个护清洁'
        }, {
          img_url: 'https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png',
          img_txt: '母婴亲子'
        }, {
          img_url: 'https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png',
          img_txt: '运动旅行'
        }, {
          img_url: 'https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png',
          img_txt: '数码家电'
        }, {
          img_url: 'https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png',
          img_txt: '全球特色'
        }, {
          img_url: 'http://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif',
          img_txt: '好货抄底'
        }
      ]
    }
  },
  created() {
    // 导航条
    this.axios.get('get_tabBtn_list').then(_d => {
      this.tabBtnArr = _d.data
    })
    // 轮播图
    this.axios.get('get_swipe_img').then(_d => {
      this.swipe_imgArr = _d.data
    })
  }
  ,
  methods: {
    /**
     * 跳转到搜索
     */
    searchBtnFn() {
      this.$router.push('/searchPage')
    }
  }
}
</script>

<style scoped lang="less">
.title-div {
  padding: .21333rem 0;

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
    padding: 0 .2rem;
  }

  .my-swipe .van-swipe-item {
    height: 4rem;
    color: #fff;
    font-size: 20px;
    line-height: 4rem;
    text-align: center;
    background-color: #39a9ed;
  }

  .indexServicePolicy {
    width: 100%;

    ul {
      height: .96rem;
      padding: 0 .4rem;
      display: flex;
      align-items: center;

      li {
        flex: 1;
        float: left;
        font-size: .32rem;
        color: #333;
        margin-left: .10667rem;
        line-height: .42667rem;
        display: inline-block;
        vertical-align: middle;

        i {
          background-size: 100% 100%;
          background-position: 50%;
          width: .4266666666666667rem;
          height: .4266666666666667rem;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }


}


</style>

<template>
  <!--  底部标签栏-->
  <div class="footer_Div">
    <!--    -->
    <van-tabbar v-model="footer_tab" active-color="#dd1a21" @change="onFooterBtnChange">
      <van-tabbar-item to="/">
        <span>首页</span>
        <template #icon="props">
          <div :class="props.active ? icon.a1 : icon.a"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="cateList">
        <span>分类</span>
        <template #icon="props">
          <div :class="props.active ? icon.b1 : icon.b"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>值得买</span>
        <template #icon="props">
          <div :class="props.active ? icon.c1 : icon.c"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>购物车</span>
        <template #icon="props">
          <div :class="props.active ? icon.d1 : icon.d"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="login">
        <span>我的</span>
        <template #icon="props">
          <div :class="props.active ? icon.e1 : icon.e"></div>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "footer_bar",
  data() {
    return {
      footer_tab: 0,
      icon: {
        a: 'footerIcon footerIcon_1',
        a1: 'footerIcon footerIcon_1_red',
        b: 'footerIcon footerIcon_2',
        b1: 'footerIcon footerIcon_2_red',
        c: 'footerIcon footerIcon_3',
        c1: 'footerIcon footerIcon_3_red',
        d: 'footerIcon footerIcon_4',
        d1: 'footerIcon footerIcon_4_red',
        e: 'footerIcon footerIcon_5',
        e1: 'footerIcon footerIcon_5_red',
      }
    }
  },
  mounted() {
    /*    // 原始做法 拿到数据，转换类型
        let _n = localStorage.getItem('save_index')
        this.footer_tab = Number(_n)
        */
    this.footer_tab = this.$store.state.footer_tab

  },
  methods: {
    /*    原始做法
        onFooterBtnChange(_inx) {
          this.footer_tab = _inx
          // 保存分类到数据本地存储
          localStorage.setItem('save_index', _inx)
        }*/
    //使用vuex完成
    onFooterBtnChange(_inx) {
      this.$store.dispatch("saveFooter_tab", _inx)
    }
  }
}
</script>

<style scoped lang="less">
.footer_Div {
  .footerIcon {
    width: .53rem;
    height: .53rem;
    margin: 0 auto;
    background-image: url('../assets/img/footer_icon.png');
    background-size: .53rem;
    background-repeat: no-repeat;
    background-position: 0 0;
  }

  .footerIcon_1 {
    background-position: 0 -250px;
  }

  .footerIcon_1_red {
    background-position: 0 -200px;
  }

  .footerIcon_2 {
    background-position: 0 -150px;
  }

  .footerIcon_2_red {
    background-position: 0 -100px;
  }

  .footerIcon_3 {
    background-position: 0 -350px;
  }

  .footerIcon_3_red {
    background-position: 0 -300px;
  }

  .footerIcon_4 {
    background-position: 0 -50px;
  }

  .footerIcon_4_red {
    background-position: 0 0;
  }

  .footerIcon_5 {
    background-position: 0 -450px;
  }

  .footerIcon_5_red {
    background-position: 0 -400px;
  }
}
</style>

<template>
  <div class="cateList">
<!--    侧边栏-->
    <div class="sidebarClass">
      <van-sidebar v-model="sidebarKey" @change="onChangeSidebar">
        <van-sidebar-item v-for="(item,index) in sidebar_arr" :key="index" :title="item.txt"/>
      </van-sidebar>
    </div>
<!--    右侧商品区-->
    <div class="sidebarGoods">
      <div class="goodsItem" v-for="(n,index) in goodsListObj" :key="index">
        <img :src="n.goods_img" alt="">
        <p>{{n.goods_name}}</p>
        <b>{{n.goods_price}}</b>
      </div>
    </div>
    <!-- 底部组件-->
    <Footer_bar></Footer_bar>
  </div>
</template>

<script>
import '../assets/css/resetVant.less';
import Footer_bar from "@/components/footer_bar";

export default {
  name: "cateList",
  components: {Footer_bar},
  data() {
    return {
      sidebarKey: 0,
      sidebar_arr: [
        {
          txt: '推荐专区'
        }, {
          txt: '爆品专区'
        }, {
          txt: '新品专区'
        }/*, {
          txt: '居家生活'
        }, {
          txt: '服饰鞋包'
        }, {
          txt: '美食酒水'
        }, {
          txt: '个护清洁'
        }, {
          txt: '母婴亲子'
        }, {
          txt: '运动旅行'
        }, {
          txt: '数码家电'
        }, {
          txt: '严选全球'
        }*/
      ],
      goodsListObj: []
    }
  },created() {
    this.axios.get('cate_goods_list_1').then(_d => {
      this.goodsListObj = _d.data
    })
  },
  methods: {
    /**
     * 获取分类列表商品
     * @param _inx
     */
    onChangeSidebar(_inx) {
      this.axios.get('cate_goods_list_' + _inx).then(_d => {
        this.goodsListObj = _d.data
      })
    }
  }
}
</script>

<style scoped lang="less">
.cateList {
  position: relative;
  padding-left: 2.16rem;
  .sidebarClass {
    position: fixed;
    left: 0;
    top: 0;
    .van-sidebar {
      width: 2.16rem;

    }

  }
  .sidebarGoods{
    //position: relative;
    .goodsItem{
      float: left;
      width: 44%;
      margin: 0rem 0.2rem 0.44rem 0.2rem;
      font-size: .37333rem;
      overflow: hidden;
      img{
        height: 4.6rem;
      }
    }
  }
}

</style>

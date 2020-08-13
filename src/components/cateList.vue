<template>
  <div class="cateList">
    <div class="sidebarClass">
      <van-sidebar v-model="sidebarKey">
        <van-sidebar-item v-for="(item,index) in sidebar_arr" :key="index" :title="item.txt"/>
      </van-sidebar>
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
        }, {
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
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.cateList {
  .sidebarClass {
    .van-sidebar {
      width: 2.16rem;

      .van-sidebar-item__text {
        font-size: .37333rem;
        line-height: .66667rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #333;
      }
    }

  }
}

</style>

<template>
  <div class="titleDiv">
    <van-row type="flex" justify="space-between">
      <van-col span="22">
        <van-field
            class="searchDiv"
            v-model="search_Value"
            placeholder="好货内部价"
            @input="inputValFn"
        >
          <!--        搜索框放大镜Icon-->
          <template v-slot:left-icon>
            <van-icon name="search" class='searchIconLeft'/>
          </template>
          <!--        清空搜索框Icon-->
          <template #button>
            <van-icon name="close" v-show="isCloseShow" @click="clear_search_inputFn"/>
          </template>
        </van-field>
      </van-col>
      <van-col span="3">
        <van-button class="cancelBtn" type="primary" size="mini">登录</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "searchPage",
  data() {
    return {
      search_Value: '',
      input_v: '',
      isCloseShow: false
    }
  },
  watch: {
    input_v() {
      this.isCloseShow = true
    }
  },
  created() {
    axios.get('http://localhost:3344/aa').then((res) => {
      console.log(res)
    })
  },
  methods: {
    inputValFn(_v) {
      this.input_v = _v
    },
    clear_search_inputFn() {
      this.search_Value = ''
      this.isCloseShow = false
    }
  }
}
</script>

<style lang="less" scoped>
.titleDiv {
  padding: .2rem .4rem;

  .searchDiv {
    padding-top: 0;
    padding-left: .26667rem;
    padding-bottom: 0;
    border: 0;
    background-color: #f4f4f4;
    height: .74667rem;
    line-height: .74667rem;
    border-radius: 4px;
    font-size: .37333rem;

    .searchIconLeft {
      font-size: .5rem;
    }
  }

  .cancelBtn {
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

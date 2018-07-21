<template>
  <div class="home tabbar-padding">
    <van-nav-bar title="房源列表" class="navigation" />
    <div class="init-loading"  v-if="initLoading">
      <van-loading type="spinner" color="black"/>
      <p>加载中...</p>
    </div>
    <div class="fang-list">
      <fang-item
        v-for="(item,index) in list"
        :key="index"
        :id="item.id"
        :title="item.title"
        :house_type="item.house_type"
        :area="item.area"
        :regin="item.regin"
        :tags="item.tags"
        :address="item.address"
        :price="item.price"
        :image="item.image">
      </fang-item>
    </div>
    <div class="pull-loading" v-if="loading">
      <van-loading type="circular" color="black" size="26px"/>
      <span>拼命加载中...</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "./home.scss";
</style>
<script src="./home.js"></script>

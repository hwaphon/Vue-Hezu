<template>
  <div class="home tabbar-padding">
    <van-search v-model="search_value" show-action placeholder="请输入搜索关键字" @input="clearSearchState">
      <div slot="action" @click="onSearch" class="search">搜索</div>
    </van-search>
    <div class="init-loading"  v-if="initLoading">
      <van-loading type="spinner" color="black"/>
      <p>加载中...</p>
    </div>
    <fang-menu></fang-menu>
    <div class="search-tips" v-if="searched">你搜索的关键词为: {{ search_value }}</div>
    <div class="fang-list">
      <fang-item
        @onClick="onFangClick"
        v-for="item in list"
        :key="item.id"
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

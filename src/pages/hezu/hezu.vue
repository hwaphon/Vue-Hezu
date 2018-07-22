<template>
  <div class="hezu tabbar-padding">
    <van-search v-model="search_value" show-action placeholder="搜索求租" @input="clearSearchState">
      <div slot="action" @click="onSearch" class="search">搜索</div>
    </van-search>
    <div class="init-loading"  v-if="initLoading">
      <van-loading type="spinner" color="black"/>
      <p>加载中...</p>
    </div>
    <fang-menu :menus="menus"></fang-menu>
    <div class="search-tips" v-if="searched">你搜索的关键词为: {{ search_value }}</div>
    <div class="hezu-list">
      <hezu-item
        v-for="item in list"
        :key="item.id"
        :id="item.id"
        :author="item.author"
        :update_time="item.update_time"
        :budget="item.budget"
        :date="item.date"
        :des="item.des"
        :collect="item.collect"
        :address="item.address">
      </hezu-item>
    </div>
    <div class="pull-loading" v-if="loading">
      <van-loading type="circular" color="black" size="26px"/>
      <span>拼命加载中...</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "./hezu.scss";
</style>
<script src="./hezu.js"></script>

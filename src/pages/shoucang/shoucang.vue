<template>
  <div class="fang-list tabbar-padding">
    <van-nav-bar
      title="我的收藏"
      left-text="返回"
      left-arrow
      @click-left="back"
    />
    <div class="init-loading"  v-if="initLoading">
      <van-loading type="spinner" color="black"/>
      <p>加载中...</p>
    </div>
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
    <div class="pull-loading" v-if="loading">
      <van-loading type="circular" color="black" size="26px"/>
      <span>拼命加载中...</span>
    </div>
  </div>
</template>
<script src="./shoucang.js"></script>
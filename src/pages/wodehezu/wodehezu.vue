<template>
  <div class="tabbar-padding">
    <van-nav-bar
      title="我的合租"
      left-text="返回"
      left-arrow
      @click-left="back"
    />
    <div class="init-loading"  v-if="initLoading">
      <van-loading type="spinner" color="black"/>
      <p>加载中...</p>
    </div>
    <van-tabs v-model="active">
      <van-tab :title="'我申请过的'">
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
      </van-tab>
      <van-tab :title="'我发布过的'">
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
            :tags="['正在进行中']"
            :address="item.address"
            :price="item.price"
            :image="item.image">
            <div class="van-btn" slot="btns">
              <van-button type="danger" class="exit-btn">下架</van-button>
            </div>
          </fang-item>
        </div>
      </van-tab>
    </van-tabs>
    <div class="pull-loading" v-if="loading">
      <van-loading type="circular" color="black" size="26px"/>
      <span>拼命加载中...</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "./wodehezu.scss";
</style>
<script src="./wodehezu.js"></script>

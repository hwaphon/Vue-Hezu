<template>
  <div class="list tabbar-padding">
    <van-nav-bar
    title="申请列表"
    left-text="返回"
    left-arrow
    @click-left="back"/>
    <div class="init-loading"  v-if="initLoading">
      <van-loading type="spinner" color="black"/>
      <p>加载中...</p>
    </div>
    <div class="list-container">
      <div class="list-item fixed-item">
        <span>姓名</span>
        <span>性别</span>
        <span>电话联系</span>
      </div>
      <div class="list-item" v-for="(item, index) in list" :key="index">
        <span>{{ item.userName }}</span>
        <span>{{ item.userSex }}</span>
        <a class="fa fa-phone-square" :href="getPhone(item.phone)"></a>
      </div>
    </div>
    <div class="pull-loading" v-if="loading">
      <van-loading type="circular" color="black" size="26px"/>
      <span>拼命加载中...</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./list.scss"
</style>
<script src="./list.js"></script>
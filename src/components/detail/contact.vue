<template>
  <div class="contact">
    <div class="collect" @click="onCollectClick">
      <span class="fa" :class="collectType"></span>
      <span>收藏</span>
    </div>
    <div class="apply" @click="onApplyClick">
      <span class="fa fa-hand-o-right" v-if="!applyCopy"></span>
      <span v-if="!applyCopy">我要申请</span>
      <span v-if="applyCopy" class="fa fa-hourglass-half"></span>
      <span v-if="applyCopy">审核中</span>
    </div>
    <a class="tel" :href="toTel">
      <span class="fa fa-phone"></span>
      <span>我要咨询</span>
    </a>
  </div>
</template>
<style scoped lang="scss">
  @import "./contact.scss";
</style>
<script src="./contact.js"></script>

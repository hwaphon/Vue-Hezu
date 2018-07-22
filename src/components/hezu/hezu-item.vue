<template>
  <div class="hezu-item">
    <div class="hezu-basic">
      <div class="hezu-author">
        <img :src="author.avatar" alt="author avatar">
        <div class="author-info">
          <span class="nickname">{{ author.nickname }}</span>
          <span class="career">{{ author.career }}</span>
        </div>
      </div>
      <div class="update-time">{{ update_time }}</div>
    </div>

    <div class="hezu-tags">
      <span class="budget">预算{{ budget }}元</span>
      <span class="date">{{ date }}入住</span>
    </div>
    <div class="hezu-des">
      {{ des }}
    </div>

    <div class="hezu-address">
      <div class="location">
        <span class="fa fa-map-marker"></span>
        {{ address }}
      </div>

      <div class="hezu-contact">
        <span class="fa" :class="collectType" @click="onCollectClick"></span>
        <a class="fa fa-phone" :href="toTel"></a>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  @import "./hezu-item.scss";
</style>
<script src="./hezu-item.js"></script>

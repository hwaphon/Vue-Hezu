<template>
  <div class="fang-detail">
    <div class="detail-images">
      <van-swipe :autoplay="3000" class="detail-images-swiper">
        <van-swipe-item v-for="(image, index) in detail.images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="detail-info">
      <span class="detail-title">{{ detail.title }}</span>
      <div class="detail-tags-time">
        <span class="detail-tags">
          <em v-for="(tag, index) in detail.tags" :key="index">
            {{ tag }}
          </em>
        </span>
        <span class="detail-time">{{ detail.publish_time }}发布</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "./fang-detail.scss";
</style>
<script src="./fang-detail.js"></script>

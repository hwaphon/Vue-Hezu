<template>
  <div class="fang-detail">
    <back></back>
    <contact :tel="detail.tel" :collect="contact.collect" :apply="contact.apply" @onChange="onContactChange"></contact>
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
      <div class="detail-basic">
        <div class="detail-item">
          <span class="item-content">{{ detail.price }}元</span>
          <span class="item-des">租金</span>
        </div>
        <div class="detail-item">
          <span class="item-content">
            <em v-if="detail.house_type.room">{{ detail.house_type.room }}室</em>
            <em v-if="detail.house_type.hall">{{ detail.house_type.hall }}厅</em>
            <em v-if="detail.house_type.bathroom">{{ detail.house_type.bathroom }}卫</em>
          </span>
          <span class="item-des">房型</span>
        </div>
        <div class="detail-item">
          <span class="item-content">{{ detail.area }}平米</span>
          <span class="item-des">面积</span>
        </div>
      </div>

      <div class="detail-more">
        <div class="more-item">
          <span class="more-des">装修:</span>
          <span class="more-content">{{ detail.decoration }}</span>
        </div>

        <div class="more-item">
          <span class="more-des">朝向:</span>
          <span class="more-content">{{ detail.oriented }}</span>
        </div>

        <div class="more-item">
          <span class="more-des">楼层:</span>
          <span class="more-content">{{ detail.floor }}层(共{{ detail.total_floor }}层)</span>
        </div>

        <div class="more-item">
          <span class="more-des">合租:</span>
          <span class="more-content">{{ detail.require }}</span>
        </div>

        <div class="more-item">
          <span class="more-des">类型:</span>
          <span class="more-content">{{ detail.zzlx }}</span>
        </div>

        <div class="more-item">
          <span class="more-des">年代:</span>
          <span class="more-content">{{ detail.age }}</span>
        </div>
      </div>

      <div class="detail-des">
        <span class="des-title">房源概况</span>
        <p>{{ detail.des }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "./fang-detail.scss";
</style>
<script src="./fang-detail.js"></script>

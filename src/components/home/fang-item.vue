<template>
  <div class="fang-item" @click="onClick">
    <img :src="image" class="fang-img">
    <div class="fang-info">
      <span class="fang-name">{{ title }}</span>
      <span class="fang-type">
        <em v-if="house_type.room">{{ house_type.room }}室</em>
        <em v-if="house_type.hall">{{ house_type.hall }}厅</em>
        <em v-if="house_type.bathroom">{{ house_type.bathroom }}卫</em>
        <em class="fang-area">{{ area }}m²</em>
      </span>
      <span class="fang-address">
        <span class="fang-addr-ab">{{ regin }}&nbsp;&nbsp;{{ address }}</span>
        <label class="fang-price"><em>{{ price }}</em>元/月</label>
      </span>
      <span class="fang-tags">
        <em v-for="(tag, index) in tags" :key="index">
          {{ tag }}
        </em>
      </span>
    </div>
  </div>
</template>
<style scoped lang="scss">
  @import "./fang-item.scss";
</style>
<script src="./fang-item.js"></script>

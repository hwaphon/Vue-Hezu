<template>
  <div class="menu">
    <div
      class="menu-item"
      :class="[ clickIndex == index ? 'selected' : '' ]"
      v-for="(menu, index) in menus"
      :key="index"
      @click="onMenuClick(index)">
      <span class="menu-title">
        {{ menu.selected === -1 ? menu.title : menu.list[menu.selected] }}
      </span>
      <span class="fa fa-caret-down" v-if="clickIndex != index"></span>
      <span class="fa fa-caret-up" v-else></span>
    </div>
    <ul class="menu-content" v-if="clickIndex !== -1">
      <li :class="[ clickIndex !== -1 && menus[clickIndex].selected === -1 ? 'item-selected' : '']" @click="selectIndex(-1)">全部</li>
      <li
        v-for="(item, index) in menuContent"
        :key="index"
        :class="[ clickIndex !== -1 && menus[clickIndex].selected === index ? 'item-selected' : '']" @click="selectIndex(index)">{{ item }}</li>
    </ul>
    <div class="mask" v-if="clickIndex !== -1" @click="closeMenu"></div>
  </div>
</template>
<style scoped lang="scss">
  @import "./menu.scss";
</style>
<script src="./menu.js"></script>

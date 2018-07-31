
<template>
  <div class="user">
    <div class="user-container" @click="onUserClick">
    	<img class="user-avatar" :src="avatar">
	    <span class="user-name">登录 / 注册</span>
    </div>
    <ul class="links">
    	<li @click="onLinkTouch('shoucang')">
	    	<span class="links-item">我的收藏</span>
        <span class="fa fa-angle-right"></span>
    	</li>
    	<li @click="onLinkTouch('wodehezu')">
        <span class="links-item">我的合租</span>
        <span class="fa fa-angle-right"></span>
    	</li>
   	</ul>
  </div>

  

</template>

<style scoped lang="scss">
  @import "./user.scss";
</style>
<script src="./user.js"></script>
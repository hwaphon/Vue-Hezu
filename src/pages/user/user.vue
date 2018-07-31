
<template>
  <div class="user">
    <div class="user-container">
    	<img class="user-avatar" src="https://is4-ssl.mzstatic.com/image/thumb/Purple125/v4/75/66/db/7566dbf3-ea0c-1cea-3cb1-8a25e332dd53/AppIcon-1x_U007emarketing-85-220-0-6.png/246x0w.jpg">
	    <span class="user-name">一个帅气的网名</span>
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
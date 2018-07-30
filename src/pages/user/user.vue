
<template>
  <div class="user">
    <div class="user-container">
    	<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3198678185,878755003&fm=27&gp=0.jpg">
	    <div class="user-name">
	    	社会人
	  	</div>
    </div>
    <ul class="links">
    	<li>
	    	<router-link to="/shoucang">我的收藏</router-link>
    	</li>
    	<li>
        <router-link to="/wodehezu">我的合租</router-link>
    	</li>
 	</ul>

  </div>

  

</template>

<style scoped lang="scss">
  @import "./user.scss";
</style>
<template>
	<div>
  		<van-cell-group>
		  <van-cell v-for="(menu, index) in menus" :key="index" :title="menu.title" @click="showArea(index)" :value="menu.list[menu.selected]" />
		</van-cell-group>
		 <div class="btns">
			<van-button @click="submit" size="large">提交</van-button>
		</div>
		<van-actionsheet v-model="showAreaSelect" :actions="actions" />
	</div>
</template>

<style scoped lang="scss">
  @import "./publish.scss";
</style>
<script src="./publish.js"></script>

<template>
	<div class="tabbar-padding">
  		<van-cell-group>
		  <van-field v-model="title" placeholder="请输入房源标题" label="标题" input-align="right" required />
		  <van-field v-model="price" placeholder="请输入房源价格" label="价格" input-align="right" type="number" required/>
		  <van-field v-model="tags" placeholder="请输入房源标签，以逗号分隔" label="标签" input-align="right" required />
		  <van-field v-model="area" placeholder="请输入房源面积，单位为平米" label="面积" input-align="right" required />
		  <van-cell title="年代" :value="formateDate" @click="showDate = !showDate" required />
		  <van-popup v-model="showDate" position="bottom">
		  	<van-datetime-picker
		  	  v-model="currentDate"
		  	  @confirm="confirmDate"
		  	  @cancel="showDate = false"
		  	  :min-date="new Date('1980')"
		  	  :max-date="new Date()"
		  	  type="date"/>
		  </van-popup>
		  <van-cell v-for="(menu, index) in menus" :key="index" :title="menu.title" @click="showArea(index)" :value="menu.list[menu.selected]" required/>
		  <van-field v-model="des" placeholder="请输入房源详细描述" label="详细描述" type="textarea" required />
		</van-cell-group>
		 <div class="btns">
			<van-button @click="submit" size="large">提交</van-button>
		</div>
		<van-actionsheet v-model="showAreaSelect" :actions="actions" class="area-select" />
	</div>
</template>

<style scoped lang="scss">
  @import "./publish.scss";
</style>
<script src="./publish.js"></script>

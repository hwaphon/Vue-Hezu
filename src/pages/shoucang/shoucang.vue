<template>
        <div class="fang-list">
          <fang-item
            @onClick="onFangClick"
            v-for="item in list"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :house_type="item.house_type"
            :area="item.area"
            :regin="item.regin"
            :tags="item.tags"
            :address="item.address"
            :price="item.price"
            :image="item.image">
          </fang-item>
        </div>
</template>
<script src="./shoucang.js"></script>
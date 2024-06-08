<script setup lang="ts">
import { getHomeBannerAPI } from '@/services/home'
import CustomNavBar from './components/CustomNavBar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'

//获取轮播图数据
const bannerList = ref<BannerItem[]>()
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
//获取前台分类数据
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryData()
}
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavBar />
  <!-- 自定义轮播图 -->
  <XtxSwiper :bannerList="bannerList!" />
  <!-- 分类 -->
  <CategoryPanel />
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>

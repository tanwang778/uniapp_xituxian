import type { PageResult } from '@/types/global'
import type { HotItem, BannerItem, CategoryItem, GuessItem } from '@/types/home'
import { http } from '@/utils/http'
/**
 * 首页-广告
 * @param distributionSite 广告区域展示位置1 为首页（默认值）2 为商品分类页
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

/**
 * 首页-前台分类-小程序
 */
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

/**
 * 首页-热门推荐-小程序
 */
export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

// src/services/home.ts
/**
 * 猜你喜欢-小程序
 */
export const getHomeGoodsGuressLikeAPI = () => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
  })
}

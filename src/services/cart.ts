import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'
import { h } from 'vue'

/**
 * 加入购物车
 * @param data 请求参数
 * @returns
 */
export const postMemberCartAPI = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}

/**
 * 获取购物车列表
 * @returns
 */
export const getMemberCartAPI = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}

/**
 *删除购物车单品
 * @param data 请求参数 skuid集合
 * @returns
 */
export const deleteMemberCartAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })
}

/**
 *  修改购物车商品数量
 * @param skuId 路径参数skuid
 * @param data 请求参数
 * @returns
 */
export const putMemberCartBySkuIdAPI = (
  skuId: string,
  data: { selected?: boolean; count?: number },
) => {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}

/**
 * 修改商品全选
 * @param data 请求参数
 * @returns
 */
export const putMemberCartSelectedAPI = (data: { selected: boolean }) => {
  return http({
    method: 'PUT',
    url: '/member/cart/selected',
    data,
  })
}

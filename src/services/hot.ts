import { http } from '../utils/http'
import type { HotResult, PageParams, PageResult, SubTypeItem } from '../types/global'
// & 交叉类型
type HotParams = PageParams & { subType?: string }
/**
 * 通用热门类型
 * @param url 请求地址
 * @param data 请求参数
 */
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}

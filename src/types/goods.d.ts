import type { AddressItem } from './address'
import type { GoodsItem } from './global'

/**商品信息 */
export type GoodsResult = {
  // 商品 id
  id: string
  //商品名称
  name: string
  //spu编码
  spuCode: string
  //备注
  desc: string
  //当前价格
  price: string
  //原价
  oldPrice: string
  //折扣
  discount: number
  //库存
  inventory: number
  //品牌信息
  brand: BrandResult
  //销量
  salesCount: number
  //评论数量
  commentCount: number
  //收藏数量
  collectCount: number
  //主图视频集合
  mainVideos: string[]
  //主图视频比例,1为1:1/16:9，2为3:4
  videoScale: number
  //主图图片集合
  mainPictures: string[]
  //可选规格集合备注：规格集合一定要和skus集合下的specs 顺序保持一致
  specs: SpecsItem[]
  //sku信息
  skus: SkusItem[]
  //所属分类
  categories: CateGoriesItem[]
  //商品详情
  details: Details
  //是否为预售商品
  isPreSale: boolean
  isCollect: null
  recommends: null
  //  用户收货地址列表
  userAddresses: AddressItem[]
  evaluationInfo: null
  //同类商品
  similarProducts: GoodsItem[]
  //24小时热销
  hotByDay: GoodsItem[]
}
/**品牌信息 */
export type BrandResult = {
  //品牌id
  id: string
  //品牌名称
  name: string
  //品牌英文名
  nameEn: string
  //图片
  picture: string
  //logo
  logo: string
  type: null
  desc: null
  place: null
}
/**可选规格集合备注 */
export type SpecsItem = {
  id: string
  //规格名称
  name: string
  //可选值集合
  values: SpecValueItem[]
}
/** 可选值信息 */
export type SpecValueItem = {
  //可选值名称
  name: string
  //可选值图片链接
  picture: string | null
  //是否可售
  available: boolean
  //可选值备注
  desc: string
}[]
/**skus信息 */
export type SkusItem = {
  //sku id
  id: string
  //sku编码
  skuCode: string
  //价格
  price: string
  //旧价格
  oldPrice: string
  //库存
  inventory: number
  //图片
  picture: string
  //规格信息(和详情中specs的顺序一定要保持一致)
  specs: SkuSpecsItem[]
}
/**sku 规格信息 */
export type SkuSpecsItem = {
  //规格名称
  name: string
  //可选值名称
  valueName: string
}
/** 所属分类*/
export type CateGoriesItem = {
  //分类id
  id: string
  //分类名称
  name: string
  layer: number
  parent: CateGoriesParentItem | null
}
/**所属分类下一级分类 */
export type CateGoriesParentItem = {
  id: string
  name: string
  layer: string
  parent: null
}
/**商品详情 */
export type Details = {
  properties: DetailPropertyItem[]
  pictures: string[]
}
/**商品属性集合 */
export type DetailPropertyItem = {
  //属性名称
  name: string
  //属性值
  value: string
}

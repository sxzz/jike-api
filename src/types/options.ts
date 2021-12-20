/**
 * 分页选项
 */
export interface PaginationOption<T = any> {
  /**
   * 最大记录数
   * @default 10
   */
  limit?: number

  /**
   * 上一页的 `loadMoreKey`
   */
  loadMoreKey?: T
}

export interface CreatePostOption {
  /**
   * 同步到个人主页
   * @default true
   */
  syncToPersonalUpdate?: boolean
  /**
   * 图片 key 列表
   * @default []
   */
  pictureKeys?: string[]
}
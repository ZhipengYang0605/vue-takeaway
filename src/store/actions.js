import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS
} from './mutation-types'

import {
  reqAddress,
  reqFoodCategorys
} from './../api/index'

export default {
  // 异步获取地址
  async getAddress ({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    let result = await reqAddress(geohash)
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  // 异步获取分类列表
  async getCategorys ({commit}) {
    let result = await reqFoodCategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  }
}

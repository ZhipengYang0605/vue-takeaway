import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'
export default {
  //  操作地址信息
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  //  操作商品类别
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  //  操作地址信息
  [RECEIVE_SHOPS] (state, {shops}) {
    // .....
  }
}

/*
* 包含多个 action creator工厂函数
* */
import {INCREMENT, DECREMENT} from './action_types'

//增加的 action creator
export const increment = number => ({type:INCREMENT, number})
//减少的 action creator
export const decrement = number => ({type:DECREMENT, number})
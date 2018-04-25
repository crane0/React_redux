/*
* 包含多个 action creator工厂函数
* */
import {INCREMENT, DECREMENT} from './action_types'

//增加的 action creator
export const increment = number => ({type:INCREMENT, number})
//减少的 action creator
export const decrement = number => ({type:DECREMENT, number})

// 异步action creator(返回一个函数)
export const incrementAsync = number => {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment(number))
        }, 1000)
    }
}

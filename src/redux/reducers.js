
/*
* 根据老的state，和 action，返回一个新的 state状态的 函数
* */
import {INCREMENT, DECREMENT} from './action_types'

export function count(state = 0, action) {
    switch (action.type) {
        case INCREMENT : {
            return state + action.number
        }
        case DECREMENT : {
            return state - action.number
        }
        default:
            return state
    }
}
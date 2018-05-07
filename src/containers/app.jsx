/*
* 包含 count组件的容器组件
* */
import React from 'react'
//需要connect连接函数（将 redux和 React之间连接起来，简化react应用中使用redux）
import {connect} from 'react-redux'

//这是 redux的 API要使用的组件
import {increment, decrement, incrementAsync} from "../redux/actions";
//这个 React的 API
import Count from '../components/count'
import {DECREMENT, INCREMENT} from "../redux/action_types";

//向外暴露的连接APP组件的包装组件
/*
* 第一个参数，将状态映射到 Count标签（该容器组件）的属性上，
*   将返回对象的所有属性传递进去（count组件）
*   因为，这是包装 count组件的容器组件
* */
export default connect(
    state => ({count: state}),
    {increment, decrement, incrementAsync}
)(Count)

//const mapStateToProps = state => ({count: state})

/*const mapDispatchToProps = dispatch => ({
    increment : number => dispatch(increment(number)),
    decrement : number => dispatch(decrement(number)),
    incrementAsync : number => {
        return dispatch => {
            setTimeout(() => {
                dispatch(increment(number))
            }, 1000)
        }
    }
})*/


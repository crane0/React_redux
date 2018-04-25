/*
* 包含 count组件的容器组件
* */
import React from 'react'
//需要connect连接函数（将 redux和 React之间连接起来，简化react应用中使用redux）
import {connect} from 'react-redux'

//这是 redux的 API要使用的组件
import {increment, decrement} from "../redux/actions";
//这个 React的 API
import Count from '../components/count'

//向外暴露的连接APP组件的包装组件
/*
* 第一个参数，将状态映射到 Count标签（该容器组件）的属性上，
*   将返回对象的所有属性传递进去（count组件）
*   因为，这是包装 count组件的容器组件
* */
export default connect(
    state => ({count: state}),
    {increment,decrement}
)(Count)


import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import App from './components/app'
import {count} from './redux/reducers'

//创建 store需要 reducer
const store = createStore(count)


function render() {
    ReactDOM.render(<App store={store} />, document.getElementById('root'))
}

//这是为了首次渲染
render()

/*
* 监听store中state的改变
* 当store产生了新的state时，执行回调
* */
store.subscribe(render)





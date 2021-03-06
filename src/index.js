import React from 'react'
import ReactDOM from 'react-dom'
//需要中间件
import {createStore, applyMiddleware} from 'redux'
//提供 store对象的访问权利（将 store变为全局可见）
import {Provider} from 'react-redux'

import thunk from 'redux-thunk'

import App from './containers/app'
import {count} from './redux/reducers'

//创建 store需要 reducer函数
//使用异步中间件
const store = createStore(count, applyMiddleware(thunk))

//渲染根组件标签的函数
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)






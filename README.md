### 实现的需求：下拉框的值，作为步长，有4个按钮
加，减，奇数时才能加，异步加

### 注意，不同的src对应不同的实现方式
- 所以，在使用时，文件夹名改为src，才可以使用。

- src_redux，简单使用redux实现
- src_react-redux，使用react-redux实现
- src，使用react-redux，并使用redux的插件redux-thunk实现异步编程


### 不同的实现都是以src_redux作为基础的，
- 下面是src_redux文件夹中的文件：
1. redux/actions.js
> 包含多个 action creator工厂函数，暴露出去的就是这个工厂函数
2. redux/action_type.js
> 定义 action对象的type常量
3. redux/reducers.js
> 根据老的 state，和 action，返回一个新的 state状态的函数
暴露出去的就是这个函数
4. components/app.js
> 实现功能。


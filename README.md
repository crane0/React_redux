### 简单使用redux
- 需求：下拉框的值，作为步长，有4个按钮
加，减，奇数时才能加，异步加

1. redux/actions.js
> 包含多个 action creator工厂函数，暴露出去的就是这个工厂函数
2. redux/action_type.js
> 定义 action对象的type常量
3. redux/reducers.js
> 根据老的 state，和 action，返回一个新的 state状态的函数
暴露出去的就是这个函数
4. components/app.js
> 实现功能。

import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {increment, decrement} from "../redux/actions";

export default class App extends Component {
    static propType = {
        store : PropTypes.object.isRequired
    }

    add = () => {
        const selected = +this.refs.optionValue.value
        // let num = this.state.num
        // num += selected
        // this.setState({
        //     num4
        // })

        //dispatch()方法的参数时 action，会进行状态 state的更新
        this.props.store.dispatch(increment(selected))
    }

    //直接删除
    remove = () => {
        const selected = +this.refs.optionValue.value
        // let num = this.state.num
        // num -= selected
        // this.setState({
        //     num
        // })
        this.props.store.dispatch(decrement(selected))
    }

    //奇数时添加
    oddAdd = () => {
        const selected = +this.refs.optionValue.value
        // let num = this.state.num

        //用于获取 state
        let num = this.props.store.getState()
        if(num%2 !== 0){
            num += selected
        }
        // this.setState({
        //     num
        // })
        this.props.store.dispatch(increment(selected))
    }

    //异步时（1s）添加
    asyncAdd = () => {
        const selected = +this.refs.optionValue.value
        // let num = this.state.num
        //用于获取 state
        let num = this.props.store.getState()
        setTimeout(() => {
            num += selected
            // this.setState({
            //     num
            // })
            this.props.store.dispatch(increment(selected))
        },1000)

    }

    render() {

        const count = this.props.store.getState()

        return (
            <div>
                <p>click {count} times</p>
                <select ref="optionValue">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <input type="button" value="+" onClick={this.add}/>
                <input type="button" value="-" onClick={this.remove}/>
                <input type="button" value="奇数时添加" onClick={this.oddAdd}/>
                <input type="button" value="异步（1s）添加" onClick={this.asyncAdd}/>
            </div>
        )
    }
}
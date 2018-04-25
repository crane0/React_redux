/*
* UI组件，不包括任何的 redux语法
* */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Count extends Component {
    static propType = {
        count : PropTypes.number.isRequired,
        increment : PropTypes.func.isRequired,
        decrement : PropTypes.func.isRequired,
        incrementAsync : PropTypes.func.isRequired
    }

    add = () => {
        const selected = +this.refs.optionValue.value
        // this.props.store.dispatch(increment(selected))
        this.props.increment(selected)
    }

    //直接删除
    remove = () => {
        const selected = +this.refs.optionValue.value
        // this.props.store.dispatch(decrement(selected))
        this.props.decrement(selected)
    }

    //奇数时添加
    oddAdd = () => {
        const selected = +this.refs.optionValue.value
        //用于获取 state
        // let num = this.props.store.getState()
        let num = this.props.count
        if(num%2 !== 0){
            num += selected
        }
        // this.props.store.dispatch(increment(selected))
        this.props.increment(selected)
    }

    //异步时（1s）添加
    asyncAdd = () => {
        const selected = +this.refs.optionValue.value
        //用于获取 state
        // let num = this.props.store.getState()
        let num = this.props.count
        this.props.incrementAsync(selected)
    }

    render() {

        return (
            <div>
                <p>click {this.props.count} times</p>
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
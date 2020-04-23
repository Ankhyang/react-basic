import React, { Component } from 'react'

import store from './store'
import { changeInputAction, addItemAction, deletItemAction, getMyListAction } from './store/actionCreators'

import TodoListUI from './TodoListUI'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.btnClick = this.btnClick.bind(this)
        this.deletItem = this.deletItem.bind(this)

        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)  // 订阅Redux的状态
    }
    componentDidMount() {
        const action = getMyListAction()
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
    btnClick() {
        const action = addItemAction()
        store.dispatch(action)
    }
    deletItem(index) {
        const action = deletItemAction(index)
        store.dispatch(action)
    }
    changeInputValue(e) {
        const action = changeInputAction(e.target.value) 
        store.dispatch(action)
    }
    render() { 
        return ( 
            <TodoListUI  changeInputValue = {this.changeInputValue}
                deleteItem = {this.deletItem}
                btnClick = {this.btnClick}
                inputValue = {this.state.inputValue}
                list = {this.state.list}
            />
         )
    }
}
 
export default TodoList
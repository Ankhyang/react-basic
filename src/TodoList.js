import React, { Component } from 'react'
import store from './store'
import { connect } from 'react-redux'

import { CHANGE_INPUT, ADD_ITEM } from './store/actionTypes'

import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

// class TodoList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = store.getState()
//     }
//     render() { 
//         let { inputValue, inputChange, addItem, list } = this.props
//         return ( 
//             <div style={{margin: '10px'}}>
//                 <div>
//                     <Input value={inputValue} onChange={inputChange} style={{width: '300px', margin: '10px'}}/>
//                     <Button type="primary" onClick={addItem}>提交</Button></div>
//                     <List bordered dataSource = {list}
//                         renderItem={(item, index)=> (<List.Item>{item}</List.Item>)}
//                     />
//             </div>
//          )
//     }
// }

// 无状态UI组件
const TodoList = (props) => {
    let { inputValue, inputChange, addItem, list } = props
    return ( 
        <div style={{margin: '10px'}}>
            <div>
                <Input value={inputValue} onChange={inputChange} style={{width: '300px', margin: '10px'}}/>
                <Button type="primary" onClick={addItem}>提交</Button></div>
                <List bordered dataSource = {list}
                    renderItem={(item, index)=> (<List.Item>{item}</List.Item>)}
                />
        </div>
        )
}

// 映射关系就是把原来的state映射成组件中的props属性
 const stateToProps = (state) => {
     return {
        inputValue: state.inputValue,
        list: state.list
     }
 }

 // 映射DispatchToProps
const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: CHANGE_INPUT,
                value: e.target.value
            }
            dispatch(action)
        },
        addItem() {
            let action = {
                type: ADD_ITEM
            }
            dispatch(action)
        }
    }
}

export default connect(stateToProps, dispatchToProps)(TodoList)

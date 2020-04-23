import React from 'react'

import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
// 无状态组件 提示程序性能
const TodoListUI = (props)=>{
    return ( 
        <div style={{margin: '10px'}}>
            <Input placeholder="" style={{width: '220px', marginRight: '10px'}} value={props.inputValue} onChange={props.changeInputValue}/>  
            <Button type="primary" onClick={props.btnClick}>增加</Button> 
            <div style={{margin: '10px', width: '300px'}}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index)=>(<List.Item onClick={() => props.deleteItem(index)}>{item}</List.Item>)}
                />
            </div>
        </div>
    )
}
 
export default TodoListUI;
import React, {Component, Fragment} from 'react'
import {Button, Input} from 'antd'
class Sister extends Component{
    render(){
        return (
            <Fragment>
                <div><Input type="text"/><Button type="primary">下单</Button></div>
                <ul>
                    <li>卡布奇诺</li>
                    <li>摩卡</li>
                </ul>
            </Fragment>
        )
    }
}
export default Sister
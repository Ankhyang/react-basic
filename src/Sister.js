import React, {Component, Fragment} from 'react'
import {Button, Input, Row, Col} from 'antd'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './Brother.css'

import Brother from './Brother'
import SisterItem from './SisterItem'
class Sister extends Component{
    constructor(props){
        super(props)
        this.inputChange = this.inputChange.bind(this)
        this.state = {
            inputValue: '',
            list: ['瑞纳冰', '可可摩卡'],
            isShow: true
        }
    }
    inputChange(e) {
        this.setState({inputValue: e.target.value})
    }
    addList(e) {
        this.setState({
            list: [...this.state.list, this.state.inputValue]
        })
    }
    deleteItem(index){
        let list = this.state.list
        list.splice(index, 1)
        this.setState({list})
    }
    componentWillMount() {
        console.log('componentWillMount----组件将要挂载到页面的时刻')
    }
    componentDidMount() {
        console.log('componentDidMount----组件挂载完成的时刻执行')
        // axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
        //         .then(res => console.log('axios 获取数据成功:'+JSON.stringify(res)))
        //         .catch(error => console.log('axios 获取数据失败'+error))
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate---组件发生改变前执行')
        return true
    }
    componentWillUpdate(){
        console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate----组件更新之后执行')
    }
    render(){
        console.log('render---组件挂载中.......')
        return (
            <Fragment>
                <Row gutter={8}>
                    <Col span="3"><label htmlFor='danping'>加入单品：</label></Col>
                    <Col span="15"><Input id='danping' value={this.state.inputValue} onChange={this.inputChange} type="text"/></Col>
                    <Col span="6"><Button type="primary" onClick={this.addList.bind(this)}>下单</Button></Col>
                </Row>
                <TransitionGroup>
                    <ul>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <CSSTransition in={this.state.isShow}
                                        timeout={1000} classNames="boss-text" 
                                        unmountOnExit
                                        onEnter={() => console.log('show ~')}
                                        onExited={() => console.log('hide ~')}
                                     >
                                        <SisterItem key={index+item} text={item} index={index} deleteItem = {this.deleteItem.bind(this)}/>
                                    </CSSTransition>
                                    /*
                                    <li key={index} onClick={this.deleteItem.bind(this, index)} dangerouslySetInnerHTML={{__html: item}}></li>
                                    */
                                )
                            })
                        }
                </ul>
                </TransitionGroup>
                
                <Brother/>
            </Fragment>
        )
    }
}
export default Sister

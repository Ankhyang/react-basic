import React, { Component } from 'react';
import { Button } from 'antd';
import { CSSTransition } from 'react-transition-group'

import './Brother.css'

class Brother extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: false
         }
        this.toggleShow = this.toggleShow.bind(this)
    }
    toggleShow() {
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
    render() { 
        return ( 
            <div>
                <CSSTransition in={this.state.isShow} timeout={2000} classNames="boss-text" unmountOnExit>
                    <div>BOSS级人物-孙悟空</div>
                </CSSTransition>   
                <div><Button type="danger" onClick={this.toggleShow}>召唤Boss</Button></div>
            </div>
         );
    }
}
 
export default Brother;
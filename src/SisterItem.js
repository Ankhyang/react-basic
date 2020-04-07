import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SisterItem extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    componentWillReceiveProps() {
        console.log('child - componentWillReceiveProps')
    }
    componentWillUnmount() {
        console.log('child - componentWillUnmount')
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.text !== this.props.text
    }
    handleClick() {
        this.props.deleteItem(this.props.index)
    }
    render() { 
        console.log('child-render')
        return ( 
        <div onClick={this.handleClick}>{this.props.text}</div>
         )
    }
}
SisterItem.defaultProps = {
    text: '默认值'
}
SisterItem.propTypes = {
    text: PropTypes.string.isRequired,
    deleteItem: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}
 
export default SisterItem;
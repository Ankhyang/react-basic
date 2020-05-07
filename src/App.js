import React, { Component } from 'react';
import Example from './Example'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0
         }
    }
    addCount() {
        this.setState({count: this.state.count+1})
    }
    // componentDidMount() {
    //     console.log(`componentDidMount => You clicked ${this.state.count} timmes `)
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     console.log(`componentDidUpdate => you clicked ${this.state.count}`)
    // }
    render() { 
        return ( 
            <div>
                {/* <p>你已经点击了{this.state.count}次</p>
                <button onClick={this.addCount.bind(this)}>增加</button> */}
                <Example/>
            </div>
         );
    }
}
 
export default App;
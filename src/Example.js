import React, { useState, useEffect } from 'react';

import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Fragment } from 'react';

function Index () {
    useEffect(()=>{
        console.log('useEffect=> index页面')
        return ()=>{
            console.log('解绑， index页面离开')
        }
    }, [])
    return <h2>Index页面</h2>
}
function List () {
    useEffect(()=>{
        console.log('useEffect=> List页面')
    })
    return <h2>List页面</h2>
}

function Example() {
    const [ count, setCount ] = useState(0)
    const [ sex, setSex ] = useState('男')
    const [ work, setWork ] = useState('程序员')
    useEffect(()=>{
        console.log(`useEffect=>you cilcked ${count} times`)
        return ()=>{
            console.log('===============')
        }
    }, [count])
    return(
        <Fragment>
            <div>
                <p>你已经点击了{count}次</p>
                <button onClick={()=>{setCount(count+1)}}>增加</button>
                <p>性别： {sex}</p>
                <p>工作： {work}</p>
                <p>点击次数： {count}</p>
            </div>

            <BrowserRouter>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/list/'>列表页</Link></li>
                </ul>
                <Route path="/" exact component={Index}/>
                <Route path="/list/" component={List}/>
            </BrowserRouter>
        </Fragment>
    )
}

export default Example
import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Index from './pages/Index'
import './index.css'

import Video from './pages/Video'
import Skill from './pages/Skill'

function AppRouter () {
    return(
        <BrowserRouter>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>一级导航</h3>
                    <ul>
                        <li><Link to="/">博客首页</Link></li>
                        <li><Link to="/video/">视频教程</Link></li>
                        <li><Link to="/skill/">职场技能</Link> </li>
                    </ul>
                </div>  
                <div className="rightMain">
                    <Route path="/" exact component={Index}></Route>
                    <Route path="/video/" component={Video}></Route>
                    <Route path="/skill/" component={Skill}></Route>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter
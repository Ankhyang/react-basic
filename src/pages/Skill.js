import React from 'react'

import { BrowserRouter, Route, Link } from 'react-router-dom'

import GetUp from './skill/Getup'
import Money from './skill/Money'

import '../index.css'

function Skill (){
    return(
        <BrowserRouter>
            <div className="mainDiv">
                <div className="leftNav">
                    <ul>
                        <li><Link to="/getup">早起</Link></li>
                        <li><Link to="/money">赚钱</Link></li>
                    </ul>
                </div>
                <div className="rightMain">
                    <Route path="/getup" component={GetUp}></Route>
                    <Route path="/money" component={Money}></Route>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default Skill
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Flutter from './video/Flutter'
import ReactPage from './video/ReactPage'
import Vue from './video/Vue'

import '../index.css'

function Video () {
    return(
        <BrowserRouter>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>一级导航</h3>
                    <ul>
                        <li><Link to="/video/flutter/">Flutter</Link></li>
                        <li><Link to="/vidoe/reactPage">ReactPage</Link></li>
                        <li><Link to="/vidoe/vue">Vue</Link></li>
                    </ul>
                </div>
                <div className="rightMain">
                    <Route path="/video/flutter/" component={Flutter}></Route>
                    <Route path="/vidoe/reactPage/" component={ReactPage}></Route>
                    <Route path="/vidoe/vue/" component={Vue}></Route>
                </div>
            </div>
        </BrowserRouter>   
    )
}
export default Video
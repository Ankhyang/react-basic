import React, { useState, useMemo, Fragment } from 'react';

function ChildComponent({name, children}){
    function changeName (name) {
        console.log('她来了，她来了。小红向我们走来了')
        return name + ',小红过来了哈'
    }
    const actionName = useMemo(()=>changeName(name), [name]) 
    return (
        <Fragment>
            <p>哈哈哈哈哈---{actionName}</p>
            <p>------{children}</p>
        </Fragment>    
    )
}

function Example7 () {
    const [ hong, setHong ] = useState('小红在')
    const [ ling, setLing ] = useState('小玲在')
    return (
        <Fragment>
            <button onClick={()=>{setHong(new Date().getTime())}}>宏</button>
            <button onClick={()=>{setLing(new Date().getTime()+'小玲过来了')}}>灵</button>
            <ChildComponent name={hong}>{ling}</ChildComponent>
        </Fragment>
    )
}
export default Example7
import React, { useRef, useState, useEffect } from 'react';
function Example8(){
    const inputEl = useRef(null)
    const changeInput = () => {
        inputEl.current.value = 'Hello'
    }
    const [ text, setText ] = useState('js')
    const textRef = useRef()
    useEffect(()=>{
        textRef.current = text
        console.log(textRef)
    })
    return (
        <div>
            <input type="text" ref={inputEl}/>
            <button onClick={changeInput}>改变值</button>
            <br></br>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
        </div>
    )
}
export default Example8
import React, { useContext } from 'react';
import { UPDATE_COLOR, ColorContext } from './Color'

function Button () {
    const { dispatch } = useContext(ColorContext)
    return (
        <div>
            <button onClick={()=>dispatch({type: UPDATE_COLOR, color: 'red'})}>红色</button>
            <button onClick={()=>dispatch({type: UPDATE_COLOR, color: 'blue'})}>蓝色</button>
        </div>
    )
}
export default Button
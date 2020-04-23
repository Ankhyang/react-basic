import { CHNAGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes'

import axios from 'axios'

export const changeInputAction = (value) => ({
    type: CHNAGE_INPUT,
    value
})

export const deletItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const getListAction = (list) => ({
    type: GET_LIST,
    list
})

export const getTododList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then(res => {
            const action = getListAction(res.data)
            dispatch(action)
        })
    }
}

export const getMyListAction = () => ({
    type: GET_MY_LIST
})


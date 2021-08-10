import { RMV, ADD } from './types'

export const addData =  (url) => dispatch => {
  dispatch({
    type: ADD,
    payload: url,
  })
}

export const removeData =  (url) => dispatch => {
  dispatch({
    type: RMV,
    payload: url,
  })
}


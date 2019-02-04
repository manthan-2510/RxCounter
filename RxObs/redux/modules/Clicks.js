import { mapTo, filter, bufferTime } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import 'rxjs'

const clickInterval = 1000

export const incrementbyOneEpic = (action) => {
    return action.pipe(
        ofType('INCREMENT'),
        bufferTime(clickInterval),
        filter( events => events.length >= 3),
        mapTo({type: 'INCREMENT_ONE'})
    )
}

export const incrementbyTwoEpic = (action) => {
    return action.pipe(
        ofType('INCREMENT'),
        bufferTime(clickInterval),
        filter( events => events.length == 2),
        mapTo({type: 'INCREMENT_TWO'})
    )
}

const initialState= {
    value: 0
}

export const incrementReducer = (state=initialState,action) => {
    switch(action.type){
        case 'INCREMENT_ONE':
            return ({
                value: state.value+1
            })
        case 'INCREMENT_TWO':
            return({
                value: state.value+2
            })
        default:
            return state
    }
}
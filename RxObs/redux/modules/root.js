import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux'
import { incrementbyOneEpic, incrementbyTwoEpic, incrementReducer } from './Clicks'

export const rootEpic = combineEpics(
    incrementbyOneEpic,
    incrementbyTwoEpic
);

export const rootReducer = combineReducers({counter: incrementReducer})
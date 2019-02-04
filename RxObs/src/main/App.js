import { Provider } from 'react-redux'
import Root from './Root'
import React, { Component } from 'react'
import store from '../../redux/configureStore'

export default class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <Root/>
            </Provider>
        )
    }
}
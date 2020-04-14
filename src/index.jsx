import React, { Component } from 'react';
import ReactDom from 'react-dom';
import List from './component/list';
import './style/style.css'


class App extends Component{
    render(){

        return(

            <>
            <div className='first'> <h1>LIST OF CORONAVIRUS INFECTED COUNTRIES</h1></div>
            <List/>
            </>
        )
    }
}

ReactDom.render(<App/>,document.getElementById('root'));
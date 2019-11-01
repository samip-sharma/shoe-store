import React from 'react'
import Navbar from './navBar'

export default class HomePage extends React.Component{
    render(){
        if (!localStorage.token) this.props.history.push("/")

        return(
            <React.Fragment>
                <Navbar />

            </React.Fragment>
        )
    }
}
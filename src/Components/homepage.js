import React from 'react'
import Navbar from './navBar'
import {connect} from 'react-redux'
// import {login} from '../Redux/action'

class HomePage extends React.Component{
    render(){
        if (!localStorage.token) this.props.history.push("/")

        return(
            <React.Fragment>
                <Navbar />
                <ul>
                    <li>shoe1</li>
                    <li>shoe 2</li>
                </ul>
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        user:state.user,
    }
  }
  
  const mapDispatchToProps = {
    // login:login,
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(HomePage)
import React from 'react'
import Navbar from './navBar'
import {connect} from 'react-redux'
import NewShoeModal from './newShoeModale'
import {uploadShoe} from '../Redux/action'

class Admin extends React.Component{
    render(){
        if (!localStorage.token) this.props.history.push("/")

        return(
            <React.Fragment>
                <Navbar />
              <NewShoeModal  uploadShoe = { this.props.uploadShoe}/>
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
    uploadShoe:uploadShoe
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Admin)
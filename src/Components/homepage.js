import React from 'react'
import Navbar from './navBar'
import {connect} from 'react-redux'
import {getShoe} from '../Redux/action'

class HomePage extends React.Component{
    componentDidMount(){
        this.props.getShoe()
    }

    render(){
        if (!localStorage.token) this.props.history.push("/")

        return(
            <React.Fragment>
                <Navbar />
                <ul>
                    {this.props.shoes.map((shoe)=>{
                      return  <div>
                                <h2>{shoe.name}</h2>
                                <p>{shoe.brand}</p>
                                <p>${shoe.price}</p>
                                <img src={shoe.image} alt={shoe.name}/>
                            </div>
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        user:state.user,
        shoes:state.shoes
    }
  }
  
  const mapDispatchToProps = {
    getShoe:getShoe
    // login:login,
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(HomePage)
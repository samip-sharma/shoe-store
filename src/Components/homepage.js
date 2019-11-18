import React from 'react'
import Navbar from './navBar'
import {connect} from 'react-redux'
import {getShoe} from '../Redux/action'

class HomePage extends React.Component{
    componentDidMount(){
        this.props.getShoe()
    }

    handleImageClick=(shoe)=>{

        localStorage.clickedShoe=JSON.stringify(shoe) 
        
        // JSON.parse(shoe)
    }

    render(){
        if (!localStorage.token) this.props.history.push("/")
        console.log(this.props.shoes)
        return(
            <React.Fragment>
                <ul>
                    {this.props.shoes.map((shoe)=>{
                      return  <div>
                                <h2>{shoe.name}</h2>
                                <img onClick={()=>this.handleImageClick(shoe)} src={shoe.image} alt={shoe.name}/>
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
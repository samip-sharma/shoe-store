import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import {connect} from 'react-redux'
import {login} from '../Redux/action'

 class Login extends React.Component {
    state = {
        email:'',
        password:''
    }

    handleLoginClick = () => {
      this.props.login(this.state)
    }

    handleInputChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

  render(){
    if (localStorage.token) this.props.history.push("/home")
    return (
        <div className="login-register-wrapper" >
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6">
                  <form>
                    <p className="h5 text-center mb-4">Sign in</p>
                    <div className="grey-text">
                      <MDBInput
                        onChange={this.handleInputChange}
                        value={this.state.email}
                        name="email"
                        label="Type your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        name = "password" 
                        onChange={this.handleInputChange}
                        value={this.state.password}
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn onClick={this.handleLoginClick}>Submit</MDBBtn>
                      <MDBBtn onClick={()=>this.props.history.push('/register')} color="primary">Register</MDBBtn>

                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
        </div>
          );
  }
};





const mapStateToProps=(state)=>{
  return {
      user:state.user,
  }
}

const mapDispatchToProps = {
  login:login,
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
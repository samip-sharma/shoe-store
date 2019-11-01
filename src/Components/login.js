import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

export default class NavBar extends React.Component {
    state = {
        email:'',
        password:''
    }

    handleLoginClick = () => {
        console.log(this.state.email,this.state.password)
        fetch('http://localhost:3000/getToken/',{
            method: "POST",
            headers:{
                "Accepts":"application/json",
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                ...this.state
            })
        }).then(res=>res.json())
           .then((data)=>{
            console.log(data)
        })
    }

    handleInputChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

  render(){
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


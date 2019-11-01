import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

export default class Register extends React.Component{
    state={
        name:'',
        email:'',
        password:''
    }

    handleRegisterSubmit = () => {
        console.log(this.state.email,this.state.password)
        fetch('http://localhost:3000/users/',{
            method: "POST",
            headers:{
                "Accepts":"application/json",
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                ...this.state
            })
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
        })
    }

    handleInputChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleRegisterForm=()=>{

    }

    render(){
        return (
            <div className="login-register-wrapper" >
                <MDBContainer>
                  <MDBRow>
                    <MDBCol md="6">
                      <form>
                        <p className="h5 text-center mb-4">Sign up</p>
                        <div className="grey-text">
                          <MDBInput
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            name="name"
                            label="Your name"
                            icon="user"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                          />
                          <MDBInput
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"
                            label="Your email"
                            icon="envelope"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                          />
                          <MDBInput
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                            label="Your password"
                            icon="lock"
                            group
                            type="password"
                            validate
                          />
                        </div>
                        <div className="text-center">
                          <MDBBtn onClick={this.handleRegisterSubmit} color="primary">Submit</MDBBtn>
                          <MDBBtn onClick={()=>this.props.history.push('/')} color="primary">Login</MDBBtn>

                        </div>
                      </form>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
            </div>
              );
    }
};


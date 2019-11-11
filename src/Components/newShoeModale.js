import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';

class NewShoeModal extends Component {
state = {
    modal14: false,
    name: '',
    brand:'',
    price:'',
    latest:false,
    image:'',
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

handleInputChange = (e) => {
this.setState({
    [e.target.name] : e.target.value 
})
}
handleCheckboxChange = (e) => {
    this.setState({
        latest: !this.state.latest
    })
}

handleFormSubmit=()=>{
    const { name, brand, price, latest ,image}= this.state
    this.props.uploadShoe({name:name, price:price, latest:latest, image:image, brand:brand})
}

render() {
    console.log(this.props)
  return (
      <MDBContainer>
        <MDBBtn color="primary" onClick={this.toggle(14)}>New Shoe?</MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>Fill The Detail Of Shoe</MDBModalHeader>
          <MDBModalBody>
                <form onSubmit={this.handleFormSubmit}>
                    Name:<input type="text" onChange={this.handleInputChange} value={this.state.name} name="name" required></input>
                    Brand:<input type="text" onChange={this.handleInputChange} value={this.state.brand} name="brand" required></input>
                    Price:<input type="text" onChange={this.handleInputChange} value={this.state.price} name="price" required></input>
                    Latest:<input type="checkbox" onChange={this.handleCheckboxChange} value={this.state.latest} name="latest" ></input>
                    Image:<input type="text" onChange={this.handleInputChange} value={this.state.image} name="image" required></input>
                    <input type = "submit" />
                </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
            {/* <MDBBtn color="primary">Save changes</MDBBtn> */}
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default NewShoeModal;
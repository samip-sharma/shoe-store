import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class NewShoeModal extends Component {
state = {
  modal14: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
      <MDBContainer>
        <MDBBtn color="primary" onClick={this.toggle(14)}>New Shoe?</MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>Fill The Detail Of Shoe</MDBModalHeader>
          <MDBModalBody>
                <form>
                    Name:<input type="text" name="name"></input>
                    Brand:<input type="text" name="brand"></input>
                    Price:<input type="text" name="price"></input>
                    Latest:<input type="text" name="latest"></input>
                    Image:<input type="text" name="image"></input>
                </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default NewShoeModal;
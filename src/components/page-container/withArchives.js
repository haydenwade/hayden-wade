import React from 'react';
import {Modal, Button } from 'react-bootstrap';


export default (Page) => {
  return class extends React.Component {

    constructor(){
        super();
        this.state = {
            show: true,
          };
    }
    handleCloseModal = () => {
        this.setState({ ...this.state, show: false })
    }
    render() {
      return (
        <React.Fragment>
          <Modal show={this.state.show} onHide={this.handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Archives</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              You are now entering the <strong>Archives</strong> of Hayden Wade. Here you will find his side projects. Some projects have been completed and others are works in progress. <strong>The content within these pages are not maintained.</strong>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleCloseModal}>
                Continue
              </Button>
            </Modal.Footer>
          </Modal>
          <Page />
        </React.Fragment>
      );
    }
  };
};

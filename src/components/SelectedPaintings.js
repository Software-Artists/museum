import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class SelectedPaintings extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.selectedModal.name}</Modal.Title>
            </Modal.Header>

            <Card.Img
              variant="top"
              src={`https://www.artic.edu/iiif/2/${this.props.selectedModal.image_id}/full/843,/0/default.jpg`}
            />

            <Modal.Body>{this.props.selectedModal.location}</Modal.Body>
            <Modal.Body>{this.props.selectedModal.artist_display}</Modal.Body>
            <Modal.Body>{this.props.selectedModal.title} </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default SelectedPaintings;

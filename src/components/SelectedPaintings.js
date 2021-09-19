import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class SelectedPaintings extends React.Component {
  render() {
    console.log(this.props.selectedData);
    // let selectedID = e.target.id.value
    console.log(this.props.selectedID);

    return (
      <div>
        {/* {this.props.selectedData.find(value) => {
          return value.id === selectedID
          {this.props.value.map((item) => {
  return (
    <div>
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>

        <Card.Img variant="top" src={item.art_image1} />

        <Modal.Body>{item.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
})}
        }} */}
        {this.props.selectedData.map((item) => {
          return (
            <div>
              <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{item.name}</Modal.Title>
                </Modal.Header>

                <Card.Img variant="top" src={item.art_image1} />

                <Modal.Body>{item.description}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.props.handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SelectedPaintings;

// <Modal show={this.props.show} onHide={this.props.handleClose}>
//   <Modal.Header closeButton>
//     <Modal.Title>{this.props.name}</Modal.Title>
//   </Modal.Header>

//   <Card.Img variant="top" src={this.props.art_image1} />

//   <Modal.Body>{this.props.description}</Modal.Body>
//   <Modal.Footer>
//     <Button variant="secondary" onClick={this.props.handleClose}>
//       Close
//     </Button>
//   </Modal.Footer>
// </Modal>

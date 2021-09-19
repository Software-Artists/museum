import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class SelectedPaintings extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     array: [],
  //   };
  // }

  render() {
    // console.log(this.props.selectedData);
    // let selectedID = e.target.id.value

    // const selectedItem = this.props.selectedData.find(
    //   (value) => value.art_image1 === this.props.selectedID
    // );
    // // this.state.array.push(selectedItem);
    // console.log(selectedItem);
    // // console.log(this.state.array);
    // this.setState({
    //   array: selectedItem,
    // });
    console.log("ddddddddddddd");
    console.log(this.props);
    console.log("ddddddddddddd");
    return (
      <div>
        {/* {this.props.selectedData.find(value) => {
          return value.id === selectedID
          
        }} */}
        {/* {this.props.selectedData.map((item) => { */}
        {/* return ( */}
        <div>
          <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.selectedModal.name}</Modal.Title>
            </Modal.Header>

            <Card.Img variant="top" src={this.props.selectedModal.art_image1} />

            <Modal.Body>{this.props.selectedModal.description}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        {/* })} */}
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

import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "../index.css";
import Form from "react-bootstrap/Form";
import SelectedPaintings from "./SelectedPaintings";

export class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      museumName: "",
      museumData: [],
      filterMuseumData: [],
      data: [],
      selectedData: [],
      show: false,
      selectedID: "",
    };
  }

  componentDidMount = async () => {
    const serverUrl = "http://localhost:3020/paintings";
    const serverResponse = await axios.get(serverUrl);
    console.log(serverResponse.data);
    this.setState({
      museumData: serverResponse.data,
      filterMuseumData: serverResponse.data,
      data: serverResponse.data,
    });
  };
  filterMuseum = (event) => {
    let value = event.target.value;
    let filteredArray;

    filteredArray = this.state.museumData.filter((element) => {
      if (element.name === value) {
        return value;
      } else if (value === "0") {
        return this.state.museumData;
      }
    });

    this.setState({
      filterMuseumData: filteredArray,
    });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = (data) => {
    this.setState({
      show: true,
      selectedData: data,
    });
  };

  handelClick = (e) => {
    this.handleShow(this.selectedData);
    this.setState({
      selectedID: e.target.id.value,
    });
  };

  // ********************************************************************

  render() {
    return (
      <div>
        <div>
          <img
            src="https://www.overstockart.com/blog/wp-content/uploads/2011/12/starrynight-1020x500.jpg"
            alt=""
            id="topImage"
          />
        </div>

        <div id="formDiv">
          <Form className="selectForm">
            <Form.Label>
              Select a museum to see all paintings from the same museum{" "}
            </Form.Label>

            <Form.Control as="select" onChange={this.filterMuseum}>
              <option value="0"> select museum name </option>
              <option value="Louvre"> Louvre Museum </option>
              <option value="The Egyptian Museum"> The Egyptian Museum </option>
              <option value="Metropolitan Museum of art">
                {" "}
                Metropolitan Museum of art{" "}
              </option>
            </Form.Control>
          </Form>
        </div>
        <div>
          {this.state.filterMuseumData.map((item) => {
            return (
              <div id="paintingDiv">
                <Card style={{ width: "25rem" }}>
                  <Card.Img
                    variant="top"
                    src={item.art_image1}
                    alt="paint image"
                    onClick={this.handelClick}
                    id="image"
                  />
                  {/* <Card.Body>
                    <Card.Title>Museum Name: {item.name}</Card.Title>
                    <Card.Text>Museum Location: {item.location}</Card.Text>
                    <Card.Text>
                      Museum Description: {item.description}
                    </Card.Text>
                  </Card.Body> */}
                </Card>
                <SelectedPaintings
                  show={this.state.show}
                  handleClose={this.handleClose}
                  selectedData={this.state.filterMuseumData}
                  selectedID={this.state.selectedID}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Collections;

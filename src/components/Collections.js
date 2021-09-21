import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "../index.css";
import Form from "react-bootstrap/Form";
import SelectedPaintings from "./SelectedPaintings";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

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
      selectedModal: {},
      addToFavorite: [],
      favItem: "",
      allFilteredFavArray: [],
    };
  }

  componentDidMount = async () => {
    const serverUrl = "http://localhost:3020/paintings";
    const serverResponse = await axios.get(serverUrl);

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
      if (element.id === value) {
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

  handelClick = async (e) => {
    await this.handleShow(this.state.selectedData);
    await this.setState({
      selectedID: e.target.src,
    });
    let selectedItem = [];

    selectedItem = this.state.filterMuseumData.find(
<<<<<<< HEAD
      (value) =>
        value.id === this.state.selectedID
=======
      (value) => value.image_id === this.state.selectedID
>>>>>>> 774213184913fee8fcea9c71bed657f9e76517d6
    );

    this.setState({
      selectedModal: selectedItem,
    });
  };

  addingToFav = async (e) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "added to favorite",
      showConfirmButton: false,
      timer: 1500,
    });

    let filteredFavArray = [];
    await this.setState({
      favItem: e.target.name,
    });

    filteredFavArray = this.state.filterMuseumData.find(
<<<<<<< HEAD
      (value) =>
        value.image_id ===     this.state.favItem
=======
      (value) => value.image_id === this.state.favItem
>>>>>>> 774213184913fee8fcea9c71bed657f9e76517d6
    );

    this.state.allFilteredFavArray.push(filteredFavArray);

    this.setState({
      addToFavorite: this.state.allFilteredFavArray,
    });

    this.props.handelPassingFav(this.state.addToFavorite);
  };

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
        {/* <div class="overlay" id="overlayDiv">
          <h2>
            Liza Museum Arts <br /> Enjoy Seeing The Most Famous Museums Around
            The World
          </h2>
        </div> */}

        <div id="formDiv">
          <Form className="selectForm">
            <Form.Label>
              Select a museum to see all paintings from the same museum{" "}
            </Form.Label>

            <Form.Control as="select" onChange={this.filterMuseum}>
              <option value="0"> select museum name </option>
              <option value="Louvre"> Louvre Museum </option>
              <option value="THE_PRADO"> The Prado Museum </option>
              <option value="THE_VATICAN_MUSEUMS"> The Vatican Museum </option>
              <option value="THE_STATE_HERMITAGE_MUSEUM">
                {" "}
                The State Hermitage Museum{" "}
              </option>
              <option value="THE_UFFIZI_GALLERIES">
                {" "}
                The UFFIZI Galleries{" "}
              </option>
              <option value="Metropolitan_Museum_of_art">
                {" "}
                Metropolitan Museum of art{" "}
              </option>
              <option value="THE_BRITISH_MUSEUM"> The British Museum </option>
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
                    src={item.image_id}
                    alt="paint image"
                    onClick={this.handelClick}
                    id="image"
                  />
                  <Card.Body>
                    <Card.Title> {item.name}</Card.Title>
                    <Card.Text> {item.location}</Card.Text>
                    <Button
                      variant="secondary"
                      onClick={this.addingToFav}
                      name={item.image_id}
                      id="collectionButton"
                    >
                      {" "}
                      Add to Favorite ❤️
                    </Button>
                  </Card.Body>
                </Card>
                <SelectedPaintings
                  show={this.state.show}
                  handleClose={this.handleClose}
                  selectedData={this.state.filterMuseumData}
                  selectedID={this.state.selectedID}
                  selectedModal={this.state.selectedModal}
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

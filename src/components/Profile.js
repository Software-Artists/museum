import React, { Component } from "react";
import Card from "react-bootstrap/Card";

// import { useAuth0 } from "@auth0/auth0-react";
// import { render } from "@testing-library/react";

// const Profile = () => {
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }

//   console.log(this.props.data);
//   return (
//     isAuthenticated && (
//       <div>
//         <img src={user.picture} alt={user.name} />
//         <h2>{user.name}</h2>
//         <p>{user.email}</p>
//       </div>
//     )
//   );

// };
export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedModal: [],
      selectedItem: [],
      
    };
  }
 
  render() {
    console.log(this.props.data,'DDDDDDDDDDDDDDDDD');

    // console.log(this.state.data);
    console.log(this.props.museumData,'ddddddddddd');

    return (
      <div>
        {/* {
          this.state.selectedItem = this.state.museumData.find(
            (value) => this.props.data === value.id
          )
        } */}

        <Card style={{ width: "100%" }}>
          <Card.Img
            variant="top"
            src={this.state.selectedItem.event_description_image}
          />
          <Card.Body>
            <Card.Title>{this.state.selectedItem.name}</Card.Title>
            <Card.Text>{this.state.selectedItem.event_description}</Card.Text>
            <Card.Title>{this.state.selectedItem.ticket_price}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Profile;

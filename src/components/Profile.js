// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const Profile = () => {
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }

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

// export default Profile;

import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export class Profile extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3 id="h3FavProfileDiv"> Favorite Paintings List ❤️</h3>
        {this.props.selectedData.map((item) => {
          return (
            <div>
              <div id="profileDiv">
                <Card style={{ width: "25rem" }}>
                  <Card.Img
                    variant="top"
                    src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                    alt="paint image"
                    id="profilePaintingImage"
                  />
                  <Card.Body>
                    <Card.Title> {item.name}</Card.Title>
                    <Card.Text> {item.location}</Card.Text>
                    <Card.Text> {item.title}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Profile;

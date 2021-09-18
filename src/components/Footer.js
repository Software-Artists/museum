import React, { Component } from "react";
import { Card } from "react-bootstrap";
export class Footer extends Component {
  render() {
    return (
      <Card className="text-center">
        <Card.Footer className="text-muted"><pre style={{fontSize:"30px", fontWeight:"bold"}}> About us          musiam         Useful Links        contact us  </pre><hr/><pre style={{float:"left",paddingLeft:"140px"}}>We are a team of programmers              louvre                               google                              home:amman/jordan</pre><br/><pre style={{float:"left",paddingLeft:"140px"}}>who have collected for                    jordan                               musiams                             email:info@example.com</pre><br/><pre style={{float:"left",paddingLeft:"135px"}}> you many paintings from                   egybt                                news                                tel:+4373972033</pre><br/><pre style={{float:"left",paddingLeft:"140px"}}>all over the world</pre><br/><br/><br/><br/><pre style={{float:"left",paddingLeft:"550px"}}>©2021 software-artists</pre></Card.Footer>
      </Card>  
    );
  }
}

export default Footer;

import React, { Component } from 'react';
import Rotate from "react-reveal"

class Home extends Component {
  state = {  }

  handleClick = ()=>{
    this.props.history.push("/about")
  }


  render() { 
    return (
      <Rotate top left>
        <aside id="banner">
          <div
            className="text-center"
            style={{ color: "white", width: "80%", margin: "0 auto" }}
          >
            <h3>Hi! Nice to meet you</h3>
            <h3>I'm Thobyson</h3>
            <h5>Web Developer | Web Designer</h5>
            <button
              className="btn-floating btn-large teal lighten-2 pulse"
              onClick={this.handleClick}
            >
              More
            </button>
          </div>
        </aside>
      </Rotate>
    );;
  }
}
 
export default Home;



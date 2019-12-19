import React from "react";
import SignIn from "./signin";

class Main extends React.Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row big-picture">
          <div className="col-sm-12 item">
            <img className="header_img" src="https://cdn.pixabay.com/photo/2016/08/05/09/31/banner-1571858__340.jpg" alt="banner" />
            <h1 className="banner-text">Instagram | Images</h1>
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="container-md col-lg-6 col-sm-12">
            <div className="header container">
              <h1>Instagram</h1>
            </div>
            <div className="signin container">
              <SignIn />
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default Main;

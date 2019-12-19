import React from "react";
// import { db } from "../firebase";

import { Form, Button } from "reactstrap";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
  state = {
    users: []
  };

  render() {
    // const { user } = this.state;

    let signIn = (e) => {

      // if(this.state.users[0].access_token) {
      //   console.log(this.state.users);
      // } else {
      // }
      window.location = `https://api.instagram.com/oauth/authorize?app_id=840025923096459&redirect_uri=https://instaimages.herokuapp.com/images&scope=user_profile,user_media&response_type=code`;
      // console.log(this.state.users[0].name);


    };

    return (
      <div className="row">
        <div className="col"></div>
        <div className="col-lg-6 col-sm-12 signup-container">
          <Form>
            <Link to="/images">
              <Button onClick={signIn} id="signin" className="instagram" color="primary">
                SignIn with Instagram/Facebook
              </Button>
            </Link>
          </Form>
        </div>
        <div className="col"></div>
      </div>
    );
  }
}

export default SignIn;

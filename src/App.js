import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./component/mainpage";
import Display from "./component/display";
import Images from "./component/images";

class App extends React.Component {
  render() {

    

    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/images" component={Display} />
            <Route exact path="/images/:username" component={Images} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

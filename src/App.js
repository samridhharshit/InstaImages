import React from 'react';
import './App.css';



import SignIn from "./components/signIn";


function App() {
  return (
      <div className="App container">
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

export default App;

import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Linux from "./Linux";
import Django from "./Django";
import Web from "./Web";
import NotFound from "./NotFound";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/linux" element={<Linux />} />
          <Route path="/django" element={<Django />} />
          <Route path="/web" element={<Web />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;

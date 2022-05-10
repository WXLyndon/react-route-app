import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Linux from "./Linux";
import Django from "./Django";
import Web from "./Web";
import WebContent from "./WebContent";
import NotFound from "./NotFound";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/linux" element={<Linux />} />
            <Route path="/django" element={<Django />} />
            <Route path="/web" element={<Web />} />
            <Route path="/web/content" element={<WebContent />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

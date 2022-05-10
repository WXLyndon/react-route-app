import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

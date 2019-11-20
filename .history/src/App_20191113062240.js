import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <>
      <Route exac path="/" component={Home} />
      <Route exac path="/rooms/" component={Rooms} />
      <Route exac path="/singleroom/" component={SingleRoom} />
    </>
  );
}

export default App;


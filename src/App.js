import React from "react";

import { HashRouter } from "react-router-dom";
import Navigation from "../src/components/AppBar/AppBar";
import Form from "./containers/Form/Form";

const App = () => {
  return (
    <HashRouter basename='/'>
      <div>
        <Navigation />
        <Form />
      </div>
    </HashRouter>
  );
};

export default App;

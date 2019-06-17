import React from "react";

import { BrowserRouter } from "react-router-dom";
import Navigation from "../src/components/AppBar/AppBar";
import Form from "./containers/Form/Form";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Form />
      </div>
    </BrowserRouter>
  );
};

export default App;

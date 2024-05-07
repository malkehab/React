import React from "react";
import Navbar from "./components/Navbar"; // Corrected import path
import ProductsList from "./components/ProductsList"; // Corrected import path
import Slider from "./components/Slider"; // Corrected import path
import About from "./components/About"; // Corrected import path
import ProductDetails from "./components/ProductDetails"; // Corrected import path
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={ProductsList} /> {/* Assuming ProductsList is your homepage */}
          <Route path="/slider" component={Slider} />
          <Route path="/about" component={About} />
          <Route path="/details/:id" component={ProductDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

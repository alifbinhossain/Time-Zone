import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Explore from "./pages/Explore/Explore";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 100,
      duration: 900,
      easing: "ease",
    });
  });

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/explore">
            <Explore></Explore>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

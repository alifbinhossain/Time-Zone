import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Explore from "./pages/Explore/Explore";
import Form from "./pages/Form/Form";
import Signin from "./pages/Form/SignIn/SignIn";
import SignUp from "./pages/Form/SignUp/SignUp";
import AllProvider from "./context/AllProvider";
import Booking from "./pages/Booking/Booking";
import PrivateRoute from "./shared_componets/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import NotFound from "./pages/404/NotFound";

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
    <AllProvider>
      <div className="App">
        <Router>
          <Switch>
            {/* -------------------------------------------------------------------------- */
            /*                                 OPEN ROUTES                                */
            /* -------------------------------------------------------------------------- */}
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/explore">
              <Explore></Explore>
            </Route>

            <Route exact path="/form/signin">
              <Form>
                <Signin></Signin>
              </Form>
            </Route>
            <Route exact path="/form/signup">
              <Form>
                <SignUp></SignUp>
              </Form>
            </Route>

            {/* -------------------------------------------------------------------------- */
            /*                               PRIVATE ROUTES                               */
            /* -------------------------------------------------------------------------- */}
            <PrivateRoute exact path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            {/* -------------------------------------------------------------------------- */
            /*                                  404 PAGE                                  */
            /* -------------------------------------------------------------------------- */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    </AllProvider>
  );
}

export default App;

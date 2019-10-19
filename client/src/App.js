import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from './components/BubblePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path="/api/colors" component={BubblePage} />
      </div>
    </Router>
  );
}

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route 
    {...rest}
    render = {props => 
      localStorage.getItem('token')
      ? ( <Component {...props} />)
      : ( <Redirect to="/" /> )
    }
  />
);

export default App;

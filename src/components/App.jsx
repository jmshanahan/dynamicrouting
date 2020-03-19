import React from "react";
import { Link } from "react-router-dom";
import { element } from "prop-types";

const App = ({ children }) => {
  return (
    <div className="App">
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {children}
    </div>
  );
};

App.propTypes = { children: element };

export default App;

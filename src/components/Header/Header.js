import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="homepage-header px-4 py-2">
      <Link to="/">
        <div className="blue-logo blue-logo-header"></div>
      </Link>
    </header>
  );
};

export default Header;

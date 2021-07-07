import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome-wrapper">
        <div>
          <h2>
            Welcome to your <span>pawfessional</span> community
          </h2>
        </div>
        <div className="red-lost">
          <Link to="/lost">I lost my pet!</Link>
          <div>lapa</div>
        </div>
        <div className="blue-found">
          <Link to="/found">I found a pet!</Link>
        </div>
      </div>
      <div>dog img</div>
      <div>
        I’m okay, just want to <Link to="/signIn">JOIN</Link> the pawsome
        community!
      </div>
    </section>
  );
};

export default Welcome;

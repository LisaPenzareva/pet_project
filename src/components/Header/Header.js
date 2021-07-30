import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {useSelector} from "react-redux";
import Buttons from "../LostAndFound/Buttons";

const Header = () => {
    const isAuth = useSelector((state) => {
        return state.users.isAuth;
    });
    const location = useLocation();
    const renderButtons = ()=>{
        if (
            (location.pathname === "/lostandfound/lost" || location.pathname === "/lostandfound/found") &&
            isAuth
        )
        return <Buttons />;
    }
  return (
    <section className="container-fluid homepage-header px-4 py-2">
        <div className=" row">
            <div className="col-6">
                <Link to="/">
                    <div className="blue-logo blue-logo-header"></div>
                </Link>
            </div>
            <div className="col-6">
                {renderButtons()}
            </div>

        </div>


    </section>
  );
};

export default Header;

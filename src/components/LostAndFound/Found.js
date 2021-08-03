import React, {useEffect} from "react";
import PetCard from "./PetCard";
import { NavLink } from "react-router-dom";
import {connect, useDispatch, useSelector} from "react-redux";
import {getFoundPets} from "../../store/actions/actionPets";

const Found = ({ pets }) => {

    const isAuth = useSelector((state) => {
        return state.users.isAuth;
    });

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFoundPets())
    }, []);

  const renderPets = () => {
    if (!pets.length) {
      return <div>No pets</div>;
    }
    return pets.map((pet) => <PetCard key={pet.id} pet={pet} />);
  };

  return (
    <section>
      <div className="found-wrapper">
        <h3 className="found-title"> Found pets </h3>
      <hr />
          {
              isAuth ? null : <div className="lost-text">
                  Would you like to publish a post?{" "}
                  <NavLink to="/signin">
                      <span style={{ textDecoration: "none", color: "#06B2BB" }}>JOIN</span>
                  </NavLink>{" "}
                  to our community
              </div>
          }
      </div>
      

      <div className="container-fluid">
        <div className="row d-flex justify-content-between">
            {renderPets()}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    pets: state.pets.list,
  };
};

export default connect(mapStateToProps, null)(Found);

import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import PetCard from "./PetCard";
import {connect, useDispatch} from "react-redux";
import {getLostPets} from "../../store/actions/actionPets";

const Lost = ({ pets }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLostPets())
    }, []);

  const renderPets = () => {
    if (!pets.length) {
      return <div>No pets</div>;
    }
    return pets.map((pet) => <PetCard key={pet.id} pet={pet} />);
  };

  return (
    <section>
        <div className="lost-wrapper">
           <h3 className="lost-title"> Lost pets </h3>
      <hr />
      <div className="lost-text">
        Would you like to publish a post?{" "}
        <NavLink to="/signin">
          <span style={{ textDecoration: "none", color: "#06B2BB" }}>JOIN</span>
        </NavLink>{" "}
        to our community
      </div> 
        </div>
      

      <div className="container">
        <div className="row">{renderPets()}</div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    pets: state.pets.lostList,
  };
};

export default connect(mapStateToProps, null)(Lost);

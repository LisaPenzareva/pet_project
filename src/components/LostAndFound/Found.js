import React from "react";
import PetCard from "./PetCard";
import {NavLink} from "react-router-dom";


const Found = () => {

  const renderPets = () => {
    // if (!pets.length) {
    //     return <div>No pets</div>;
    // }
    // return pets.map((pet) => (
    //     <PetCard key={pet.id} pet={pet} />
    // ));
    return (
        <PetCard/>
    )
  };

  return (
      <section>
        <h3> Found pets </h3>
        <hr/>
        <div>Would you like to publish a post?{" "}<NavLink to="/signin">
          <span style={{textDecoration: "none", color: "#06B2BB"}}>JOIN</span>
        </NavLink>{" "} to our community
        </div>

        <div className="container">
          <div className="row">{renderPets()}</div>
        </div>

      </section>
  )
};
export default Found;

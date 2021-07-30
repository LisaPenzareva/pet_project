import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faSearch } from "@fortawesome/free-solid-svg-icons";
import LostAndFoundForm from "./LostAndFoundForm";
import {useHistory} from "react-router-dom";

const Buttons = ()=>{
    const history = useHistory()
    const clickHandleFound = (event)=>{
        event.preventDefault()
        history.push("/lostandfound/form/found")
    }
    const clickHandleLost = (event)=>{
        event.preventDefault()
        history.push("/lostandfound/form/lost")
    }
    return(
<div className="container">
    <button type="button" className="lost-button btn mx-3 my-4" onClick={clickHandleLost}> <FontAwesomeIcon icon={faSearch} /> &nbsp; I lost my pet </button>
    <button type="button" className="found-button btn" onClick={clickHandleFound}> <FontAwesomeIcon icon={faPaw} /> &nbsp; I found a pet </button>
</div>
    )
}
export default Buttons
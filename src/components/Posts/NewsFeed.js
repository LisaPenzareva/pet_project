import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";

const NewsFeed = () => {
  return <section className="post-section">
    <div className="post-block  py-3">
      <div className="post-header d-flex justify-content-start flex-wrap mb-2">
        <div className="post-avatar"></div>
        <div className="d-flex flex-column mx-3">
          <h5 style={{color:"#06B2BB9A", fontWeight:"bold"}}>John Clarks</h5>
          <p style={{color:"#BABABA"}}>06 August 2021</p>
        </div>
      </div>
        <div className="post-text">
          <h5>The quick, brown fox jumps over a lazy dog.</h5>
          <a href="#" style={{color:"#06B2BB9A"}}>...more</a>
        </div>
        <div className="fa-icon-like d-flex justify-content-end py-2">
          <span><FontAwesomeIcon icon={ faThumbsUp} /></span> &nbsp;176
        </div>
        <hr/>


    </div>
    <div className="post-block py-3">
      <div className="post-header d-flex justify-content-start flex-wrap mb-2">
        <div className="post-avatar-1"></div>
        <div className="d-flex flex-column mx-3">
          <h5 style={{color:"#06B2BB9A", fontWeight:"bold"}}>Samuel Jackson</h5>
          <p style={{color:"#BABABA"}}>05 August 2021</p>
        </div>

      </div>

        <div className="post-text">
          <div className="post-pic
"></div>
          <h5>The quick, brown fox jumps over a lazy dog.</h5>
          <a href="#" style={{color:"#06B2BB9A"}}>...more</a>
        </div>
      <div className="fa-icon-like d-flex justify-content-end py-2">
        <span><FontAwesomeIcon icon={ faThumbsUp} /></span> &nbsp;1400
      </div>
        <hr/>
    </div>
    <div className="post-block py-3">
      <div className="post-header d-flex justify-content-start flex-wrap mb-2">
        <div className="post-avatar-2"></div>
        <div className="d-flex flex-column mx-3">
          <h5 style={{color:"#06B2BB9A", fontWeight:"bold"}}>Joanna Forks</h5>
          <p style={{color:"#BABABA"}}>29 July 2021</p>
        </div>
      </div>

        <div className="post-text">
          <h5>The quick, brown fox jumps over a lazy dog. </h5>
          <a href="#" style={{color:"#06B2BB9A"}}>...more</a>
        </div>
        <div className="fa-icon-like d-flex justify-content-end py-2">
          <span><FontAwesomeIcon icon={ faThumbsUp} /></span> &nbsp;181
        </div>
        <hr/>


    </div>
  </section>;
};

export default NewsFeed;

import React from "react";

const WalkingPosts = () => {
  return (
      <section className="p-5">
        <div className="container-fluid mb-3">
          <div className="lost-wrapper">
            <h3 className="lost-title"> Walking. No time tonight? We have a solution! </h3>

          </div>
          <hr  />
        </div>
        <div className="d-flex flex-wrap justify-content-between py-3">
          <div className="article-pic "></div>
          <div className="w-50">
            <div className="post-header d-flex justify-content-start flex-wrap mb-2 ">
              <div className="post-avatar"></div>
              <div className="d-flex flex-column mx-3">
                <h5 style={{color:"#06B2BB9A", fontWeight:"bold"}}>John Clarks</h5>
                <p style={{color:"#BABABA"}}>06 August 2021</p>
              </div>
            </div>
            <div className="post-text">
              <h5 style={{width:"80%"}}>The quick, brown fox jumps over a lazy dog.</h5>
              <a href="#" style={{color:"#06B2BB9A"}}>...view detail</a>
            </div>
          </div>
        </div>
          <hr/>
        <div className="d-flex flex-wrap justify-content-between py-3">
          <div className="article-pic-1 "></div>
          <div className="w-50">
            <div className="post-header d-flex justify-content-start flex-wrap mb-2 ">
              <div className="post-avatar-2"></div>
              <div className="d-flex flex-column mx-3">
                <h5 style={{color:"#06B2BB9A", fontWeight:"bold"}}>Joanna Forks</h5>
                <p style={{color:"#BABABA"}}>04 August 2021</p>
              </div>
            </div>
            <div className="post-text">
              <h5 style={{width:"80%"}}>The quick, brown fox jumps over a lazy dog.</h5>
              <a href="#" style={{color:"#06B2BB9A"}}>...view detail</a>
            </div>
          </div>
        </div>
        <hr/>
        <div className="d-flex flex-wrap justify-content-between py-3">
          <div className="article-pic-2 "></div>
          <div className="w-50">
            <div className="post-header d-flex justify-content-start flex-wrap mb-2 ">
              <div className="post-avatar-1"></div>
              <div className="d-flex flex-column mx-3">
                <h5 style={{color:"#06B2BB9A", fontWeight:"bold"}}>Samuel Jackson</h5>
                <p style={{color:"#BABABA"}}>01 August 2021</p>
              </div>
            </div>
            <div className="post-text">
              <h5 style={{width:"80%"}}>The quick, brown fox jumps over a lazy dog.</h5>
              <a href="#" style={{color:"#06B2BB9A"}}>...view detail</a>
            </div>
          </div>
        </div>
        <hr/>

      </section>
  );
};

export default WalkingPosts;

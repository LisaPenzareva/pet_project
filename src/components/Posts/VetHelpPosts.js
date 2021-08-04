import React from "react";

const VetHelpPosts = () => {
  return (
      <section className="p-5">
        <div className="container-fluid mb-3">
          <div className="lost-wrapper">
            <h3 className="lost-title"> VetHelp. They deserve it.</h3>
          </div>
          <hr  />
        </div>
        <div className="d-flex flex-wrap justify-content-between py-3">
          <div className="article-pic-6 "></div>
          <div className="w-50">
              <div className="d-flex flex-column">
                <h5 style={{color:"#06B2BB9A", fontWeight:"bold"}}>Friedhelm Hellwig Tierarzt</h5>
              </div>
            <div className="post-text" style={{width:"90%"}}>
              <p style={{fontWeight: "bold"}}>Adresse:</p>
              <p>Steifensands 7, 14057 Berlin</p>
              <p style={{fontWeight: "bold"}}> Öffnungszeiten:</p>
              <p>Montag bis Samstag 10:00 - 12:00 Uhr </p>
              <p>Montag bis Freitag 16:00 - 20:00 Uhr</p>
              <a href="#" style={{color:"#06B2BB9A"}}>...view detail</a>
            </div>
          </div>
        </div>
        <hr/>
        <div className="d-flex flex-wrap justify-content-between py-3">
          <div className="article-pic-7 "></div>
          <div className="w-50">
            <div className="d-flex flex-column">
              <h5 style={{color:"#06B2BB9A", fontWeight:"bold"}}>Tierklinik</h5>
            </div>
            <div className="post-text" style={{width:"90%"}}>
              <p style={{fontWeight: "bold"}}>Adresse:</p>
              <p>Steifensands 7, 14057 Berlin</p>
              <p style={{fontWeight: "bold"}}> Öffnungszeiten:</p>
              <p>Montag bis Samstag 10:00 - 12:00 Uhr </p>
              <p>Montag bis Freitag 16:00 - 20:00 Uhr</p>
              <a href="#" style={{color:"#06B2BB9A"}}>...view detail</a>
            </div>
          </div>
        </div>
        <hr/>
        <div className="d-flex flex-wrap justify-content-between py-3">
          <div className="article-pic-8 "></div>
          <div className="w-50">
            <div className="d-flex flex-column">
              <h5 style={{color:"#06B2BB9A", fontWeight:"bold"}}>Tierklinik</h5>
            </div>
            <div className="post-text" style={{width:"90%"}}>
              <p style={{fontWeight: "bold"}}>Adresse:</p>
              <p>Steifensands 7, 14057 Berlin</p>
              <p style={{fontWeight: "bold"}}> Öffnungszeiten:</p>
              <p>Montag bis Samstag 10:00 - 12:00 Uhr </p>
              <p>Montag bis Freitag 16:00 - 20:00 Uhr</p>
              <a href="#" style={{color:"#06B2BB9A"}}>...view detail</a>
            </div>
          </div>
        </div>
        <hr/>

      </section>
  )
};

export default VetHelpPosts;

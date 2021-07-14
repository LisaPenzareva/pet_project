import React from "react";

const FooterSignIn = ()=>{

    return (
        <div className="d-flex flex-row flex-wrap justify-content-center">
            <p className="col-xs-12 col-lg-6 mt-3  terms-text">By clicking "Submit", you are agree to us processing your information in accordance with <span className="underlinedText">these terms.</span></p>
            <div className="mt-3  button-block  justify-content-center">
                <div className="cancel-button py-2 mr-3">Cancel </div>
                <div className="submit-button py-2 ml-3" > <div className='offset-1'> Submit</div></div>
            </div>
        </div>
    )

}

export default FooterSignIn
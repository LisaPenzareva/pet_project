import React, {useState} from "react";
import {useHistory} from 'react-router-dom'
import {connect} from "react-redux";
import {doSignIn} from "../../store/actions/actionUsers";

const SignIn = ({signin}) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    let history = useHistory()

    const submitHandle = async (formData) => {
       await signin(formData);
        history.push('/homepage')
    }

    return (
        <div className="container">
            <div className="d-flex flex-row flex-wrap mb-5">
                <div className="mt-5 signin-container mx-5">
                    <div className="hide"></div>
                    <form onSubmit={submitHandle}>
                        <div className="labeledInput">
                            <label className="labelClass" style={{fontWeight: '500'}}>Email:</label>{' '}
                            <input className="inputForm" placeholder='helenjohnson@gmail.com'/>
                        </div>
                        <div className="labeledInput">
                            <label className="labelClass" style={{fontWeight: '500'}}>Password:</label>{' '}
                            <input type="password" className="inputForm" placeholder='**********'/>
                        </div>
                        <hr/>
                        <div className="d-flex flex-row flex-wrap justify-content-center">
                            <p className="col-xs-12 col-lg-6 mt-3  terms-text">By clicking "Submit", you are agree to us processing your information in accordance with <span className="underlinedText">these terms.</span></p>
                            <div className="mt-3  button-block  justify-content-center">
                                <button className="cancel-button py-2 mr-3"> Cancel </button>
                                <button type="submit" className="submit-button py-2 ml-3 offset-1"> Submit </button>
                            </div>
                        </div>
                    </form>
                    <div className="hide"></div>
                </div>

            </div>

        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signin: (person) => dispatch(doSignIn(person)),
    };
};

export default connect(null, mapDispatchToProps)(SignIn);
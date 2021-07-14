import React from 'react';
import InputField from "../FormComponents/InputField";
import {useForm} from "react-cool-form";


const SignUp = () => {

    return (
        <div className='container'>
            <div className='d-flex flex-row flex-wrap justify-content-center '>
                <div className='col mx-5 mt-5'>
                    <div className="labeledInput">
                        <label className="labelClass " style={{fontWeight: '500'}}>Name:</label>{' '}
                    <input className="inputForm" placeholder='Helen Johnson'/>
                </div>
                <div className="labeledInput">
                    <label className="labelClass " style={{fontWeight: '500'}}>Email:</label>{' '}
                    <input className="inputForm" placeholder='helenjohnson@gmail.com'/>
                </div>
                <div className="labeledInput">
                    <label className="labelClass " style={{fontWeight: '500'}}>Password:</label>{' '}
                    <input className="inputForm" placeholder='**********'/>
                </div>
                <div className="labeledInput">
                    <label className="labelClass " style={{fontWeight: '500'}}>Password:</label>{' '}
                    <input className="inputForm" placeholder='**********'/>
                </div>

                </div>
                <div className='col mt-0 py-5' ><p className="sideText">
                    Password must have at least 8 characters with at least one Capital letter,
                    at least one lower case letter and at least one number or special character.
                </p>
                    <p className="sideText-1">please re-enter your password</p>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default SignUp;
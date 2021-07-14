import React from "react";
import {useForm} from "react-cool-form"
import {useHistory} from 'react-router-dom'


import InputField from "../FormComponents/InputField";

const SignIn = () => {

    return (
        <div className="container">
            <div className="d-flex flex-row flex-wrap mb-5">
                <div className="mt-5 signin-container mx-5">
                    <div className="hide"></div>
                    <form>
                        <div className="labeledInput">
                            <label className="labelClass " style={{fontWeight: '500'}}>Email:</label>{' '}
                            <input className="inputForm" placeholder='helenjohnson@gmail.com'/>
                        </div>
                        <div className="labeledInput">
                            <label className="labelClass " style={{fontWeight: '500'}}>Password:</label>{' '}
                            <input className="inputForm" placeholder='**********'/>
                        </div>

                    </form>

                    <div className="hide"></div>
                </div>

            </div>
            <hr/>
        </div>

    )
}

export default SignIn
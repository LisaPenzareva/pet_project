import React, {useState} from 'react';
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import FooterSignIn from "./FooterSignIn";

const SignPage = () => {

    const [signContent, setSignContent] = useState(<SignIn/>)


    return (
        <section className="blue-bg">
            <div className='container bg-white white-container mb-5'>
                <div className='col-6 d-flex blue-logo-container'>
                    <div className="blue-logo" ></div>
                </div>
                <div className="flex-row d-flex flex-wrap justify-content-center signin-text">
                    <div className='ml-1'> <strong>Welcome!</strong> Please sign in/sign up to continue or</div>
                </div>

                <div className='flex-row d-flex flex-wrap justify-content-center text-center mt-3'>
                    <div onClick={()=>{
                        setSignContent(<SignIn/>)}}  className="col-6 signInUp  py-2 text-white"> Sign up </div>
                    <div onClick={()=>{setSignContent(<SignUp/>)}} className="col-6 signInUp  py-2 text-white"> Sign in </div>
                </div>
                <div className='pb-3'>{signContent}</div>
                <FooterSignIn/>
            </div>
            <hr/>
        </section>

    );
};

export default SignPage;
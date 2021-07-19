import React, {useState} from 'react';
import {connect} from "react-redux";
// import InputField from "../FormComponents/InputField";
// import {useForm} from "react-cool-form";
import {useHistory} from "react-router-dom";
import {addNewUser} from "../../store/actions/actionUsers";


const SignUp = ({addUser}) => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    })

    let history = useHistory()

    const changeFieldHandle = event => {
        setFormData({
            ...formData, [event.target.name]: event.target.value
        })
    }

    const submitHandle = formData => {
        addUser(formData)
        history.push('/signin')
    }

    return (
        <div className='container'>
            <div className='d-flex flex-row flex-wrap justify-content-center '>
                <div className='col mx-5 mt-5'>
                    <form onSubmit={submitHandle}>
                        <div className="labeledInput">
                            <label className="labelClass " style={{fontWeight: '500'}}>Name:</label>{' '}
                            <input className="inputForm" placeholder='Helen Johnson' name='fullName' onChange={changeFieldHandle}/>
                        </div>
                        <div className="labeledInput">
                            <label className="labelClass " style={{fontWeight: '500'}}>Email:</label>{' '}
                            <input className="inputForm" placeholder='helenjohnson@gmail.com' name='email' onChange={changeFieldHandle}/>
                        </div>
                        <div className="labeledInput">
                            <label className="labelClass " style={{fontWeight: '500'}}>Password:</label>{' '}
                            <input type="password" className="inputForm" placeholder='**********' name='password' onChange={changeFieldHandle}/>
                        </div>
                        {/*<div className='col mt-0 py-5' ><p className="sideText">*/}
                        {/*    Password must have at least 8 characters with at least one Capital letter,*/}
                        {/*    at least one lower case letter and at least one number or special character.*/}
                        {/*</p>*/}
                        {/*    /!*<p className="sideText-1">please re-enter your password</p>*!/*/}
                        {/*</div>*/}
                        <hr/>
                        <div className="d-flex flex-row flex-wrap justify-content-center">
                            <p className="col-xs-12 col-lg-6 mt-3  terms-text">By clicking "Submit", you are agree to us processing your information in accordance with <span className="underlinedText">these terms.</span></p>
                            <div className="mt-3  button-block  justify-content-center">
                                <button className="cancel-button py-2 mr-3"> Cancel </button>
                                <button type="submit" className="submit-button py-2 ml-3 offset-1"> Submit </button>
                            </div>
                        </div>
                    </form>

                {/*<div className="labeledInput">*/}
                {/*    <label className="labelClass " style={{fontWeight: '500'}}>Password:</label>{' '}*/}
                {/*    <input className="inputForm" placeholder='**********'/>*/}
                {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => dispatch(addNewUser(user))
    }
}

export default connect(null, mapDispatchToProps)(SignUp);
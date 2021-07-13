import React from "react";
import {useForm} from "react-cool-form"
import {useHistory} from 'react-router-dom'


import InputField from "../FormComponents/InputField";

const SignIn = () => {

    let history = useHistory()

    const { form, use } = useForm({
        defaultValues: { email: '', password:'' },
        //onSubmit: (values) => submitHandle(values),
    });
    //
    // const submitHandle = async values => {
    //     await signIn(values)
    //     history.push('/users')
    // }

    const errors = use("errors", { errorWithTouched: true })

    return (
        <div className="container">
            <div className="d-flex flex-row flex-wrap">
                <div className="mt-5 signin-container">
                    <div className="hide"></div>
                    <form ref={form} noValidate>

                        <InputField
                            type="email"
                            name="email"
                            id="email"
                            label="Email"
                            placeholder="helenjohnson@gmail.com"
                            required
                            error={errors.email}
                        />
                        <InputField
                            type="password"
                            name="password"
                            id="password"
                            label="Password"
                            placeholder="************"
                            required
                            error={errors.password}
                        />

                        {/*<div className="form-group mt-3">*/}
                        {/*    <button type="submit" className="btn btn-primary w-100">Sign In</button>*/}
                        {/*</div>*/}
                    </form>
                    <div className="hide"></div>
                </div>

            </div>
        </div>
    )
}

export default SignIn
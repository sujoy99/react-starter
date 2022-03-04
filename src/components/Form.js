import React, { useState } from 'react'
import SignupForm from './SignupForm';
import SignupFormSuccess from './SignupFormSuccess';

const Form = () => {
    const [formIsSubmited, setFormIsSubmited] = useState(false)

    const submitForm = (flag) => {
        setFormIsSubmited(flag)
    }

    return (
        <div>
            {!formIsSubmited ?
                <SignupForm submitForm={submitForm} />
                :
                <SignupFormSuccess />
            }

        </div>
    )
}

export default Form

import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Input from './Input';
import validation from './validation'
import TagInput from './TagInput';

const SignupForm = ({submitForm}) => {
    console.log(submitForm);

    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
        componentTest: ""
    })
    const [errors, setErrors] = useState({})
    const [dataIsCorrect, setDataIsCorrect] = useState(false)

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        console.log(values)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        setErrors(validation(values))
        console.log(errors);
        setDataIsCorrect(true)
        console.log("no error---submited")
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true)
        }
    }, [errors])

    console.log("render")
    return (
        <div>
            <h1>Signup</h1>
            <form action="/">
                <Row>
                    <Col lg={3}>
                        <label htmlFor="">Fullname</label>
                        <input type="text" name="fullname" id="" value={values.fullname} onChange={handleChange} />
                        {errors.fullname && <p style={{color:"red"}}>{errors.fullname}</p>}
                    </Col>

                    <Col lg={3}>
                        <label htmlFor="">Email</label>
                        <input type="text" name="email" id="" onChange={handleChange} value={values.email} />
                        {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                    </Col>

                    <Col lg={3}>
                        <label htmlFor="">Password</label>
                        <input type="text" name="password" id="" onChange={handleChange}  value={values.password} />
                        {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
                    </Col>

                    <Col lg={3}>
                        <label htmlFor="">Componet</label>
                        <Input type="password" name="componentTest" handler={handleChange}  value={values.componentTest} />
                        {errors.componentTest && <p style={{color:"red"}}>{errors.componentTest}</p>}
                    </Col>

                    <Col lg={12}>
                        <label htmlFor="">Componet</label>
                        <TagInput />
                    </Col>

                </Row>
                <Row>
                    <button onClick={handleSubmit}>Submit</button>
                </Row>

            </form>
        </div>
    )
}

export default SignupForm

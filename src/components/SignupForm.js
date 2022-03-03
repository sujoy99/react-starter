import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Input from './Input';
import validation from './validation'

const SignupForm = () => {

    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
        componentTest: ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        console.log("a", e)
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
        console.log("no error---submited")
    }

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
                        <input type="text" name="email" id="" onChange={handleChange} />
                        {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                    </Col>

                    <Col lg={3}>
                        <label htmlFor="">Password</label>
                        <input type="text" name="password" id="" onChange={handleChange} />
                        {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
                    </Col>

                    <Col lg={3}>
                        <label htmlFor="">Componet</label>
                        <Input type="password" name="componentTest" handler={handleChange} />
                        {errors.componentTest && <p style={{color:"red"}}>{errors.componentTest}</p>}
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

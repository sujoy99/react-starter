import React from 'react'

const Input = ({type, name, handler}) => {
    return (
        <>
            <input type={type} name={name} id="" onChange={handler} />
        </>
    )
}

export default Input

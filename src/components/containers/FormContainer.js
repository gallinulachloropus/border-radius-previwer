import React from 'react'
import Form from '../Form'

const FormContainer = (props) => {
    const handleChange = (e) => {
        const { value, name } = e.target
        props.setBorders({ ...props.borders, [name]: value })
    }

    return (
        <Form handleChange={handleChange}/>
    )
}

export default FormContainer

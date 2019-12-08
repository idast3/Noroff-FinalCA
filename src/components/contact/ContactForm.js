import React from "react";
import useForm from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
    phone: yup
        .string()
        .required("Please enter a valid phone number")
        .matches(/[0-9]{3}[ .-][0-9]{3}[ .-][0-9]{4}/, "Number format must be xxx xxx xxxx")
});

export default function App() {
    const { register, handleSubmit, watch, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
    }

    console.log(watch("firstName"));

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>

            <h1>Contact us</h1>
            <Form.Group>
                <Form.Label><b>First Name</b></Form.Label>
                <Form.Control name="firstName" placeholder="Enter your first name" ref={register} />
                {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Last Name</b></Form.Label>
                <Form.Control name="lastName" placeholder="Enter your last name" ref={register} />
                {errors.lastName && <p className="error-msg">{errors.lastName.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Email</b></Form.Label>
                <Form.Control name="email" placeholder="name@example.com" ref={register} />
                {errors.email && <p className="error-msg">{errors.email.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Phone</b></Form.Label>
                <Form.Control name="phone" placeholder="xxx xxx xxxx" ref={register} />
                {errors.phone && <p className="error-msg">{errors.phone.message}</p>}
            </Form.Group>

            <Button type="submit" variant="dark" className="submit-message">
                Submit
            </Button>
        </Form>
    );
}

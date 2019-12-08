import React from "react";
import useForm from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";

export default function LoginForm() {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        localStorage.setItem("username", data.Username);
        history.push("/cards");
    };

    console.log(errors);

    return (
        <Container>

            <h1>Sign in to your account</h1>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Control id="Username" type="text" placeholder="Username" name="Username" ref={register({ required: true, min: 3, maxLength: 10 })} />
                <br />
                <Form.Control id="Password" type="text" placeholder="Password" name="Password" ref={register({ required: true, maxLength: 20 })} /> <br />
                <Button type="submit" variant="dark">
                    Sign in
                </Button>
            </Form>
        </Container>
    );
}

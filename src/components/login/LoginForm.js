import React from 'react';
import useForm from 'react-hook-form';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Home from "../home/Home";
import { Redirect } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

export default function LoginForm() {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => localStorage.setItem(document.getElementById("Username").value, document.getElementById("Password").value);
  console.log(errors);

  return (
    <Router>

    <Container>

    <br/><br/><br/>
    <h1>Sign in to your account</h1><br/>
    <Form onSubmit={handleSubmit(onSubmit)} >
      <Form.Control id="Username" type="text" placeholder="Username" name="Username" ref={register({required: true, min: 3, maxLength: 10})} /><br/>
      <Form.Control id="Password" type="text" placeholder="Password" name="Password" ref={register({required: true, maxLength: 20})} /> <br/>

          <Button type="submit" variant="dark">Sign in</Button>

    </Form>
    </Container>

    <Switch>
        <Route path="/home" component={Home} />
    </Switch>
    </Router>
  );
}

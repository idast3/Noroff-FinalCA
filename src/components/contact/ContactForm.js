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
	phone: yup.number().required("Please enter a valid phone number")
		.integer("Please enter a valid phone number")
		.min(10, "Number format must be xxx xxx xxxx")
		.max(10, "Number format must be xxx xxx xxxx")
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
<br/><br/><br/>
<h1>Contact us</h1><br/>
        <Form.Group>
					<Form.Label>First Name</Form.Label>
					<Form.Control name="firstName" placeholder="Enter your first name" ref={register} />
					{errors.firstName && <p>{errors.firstName.message}</p>}
				</Form.Group>

        <Form.Group>
					<Form.Label>Last Name</Form.Label>
					<Form.Control name="lastName" placeholder="Enter your last name" ref={register} />
					{errors.lastName && <p>{errors.lastName.message}</p>}
				</Form.Group>


				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control name="email" placeholder="name@example.com" ref={register} />
					{errors.email && <p>{errors.email.message}</p>}
				</Form.Group>

				<Form.Group>
					<Form.Label>Phone</Form.Label>
					<Form.Control type="number" name="phone" placeholder="xxx xxx xxxx" ref={register} />
					{errors.phone && <p>{errors.phone.message}</p>}
				</Form.Group>

				<Button type="submit" variant="dark">Submit</Button>
			</Form>
	);
}

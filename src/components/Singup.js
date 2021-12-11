/* eslint-disable no-alert */
import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import './style/singup.css';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    message: Yup.string().min(10, 'Too Short!').max(500, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const ValidationSchemaExample = function ValidationSchemaExample() {
    return (
        <div className="container">
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    // same shape as initial values
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ errors, touched }) => (
                    <Form className="from-container">
                        <label htmlFor="fristName">frist Name </label>
                        <Field
                            name="firstName"
                            id="fristName"
                            className="input"
                            placeholder="Frist Name"
                        />
                        {errors.firstName && touched.firstName ? (
                            <div className="error">{errors.firstName}</div>
                        ) : null}

                        <label htmlFor="lastName">last Name</label>
                        <Field
                            name="lastName"
                            id="lastName"
                            className="input"
                            placeholder="Last Name"
                        />

                        {errors.lastName && touched.lastName ? (
                            <div className="error">{errors.lastName}</div>
                        ) : null}

                        <label htmlFor="email">email</label>
                        <Field
                            name="email"
                            id="email"
                            type="email"
                            className="input"
                            placeholder="Email"
                        />

                        {errors.email && touched.email ? (
                            <div className="error">{errors.email}</div>
                        ) : null}

                        <label htmlFor="message">message</label>
                        <Field
                            as="textarea"
                            name="message"
                            id="message"
                            className="message"
                            placeholder="Message Here"
                        />
                        {errors.message && touched.message ? (
                            <div className="error">{errors.message}</div>
                        ) : null}

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ValidationSchemaExample;

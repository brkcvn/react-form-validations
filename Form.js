import React, {Component} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';



/*eslint-disable */
class Contact extends Component {
  
    render() {
        return (
            <div>
                <Formik
                initialValues={{
                    name:'',
                    email: ''
                }}
                validationSchema={
                    Yup.object().shape({
                        name: Yup.string()
                        .required('required'),
                        email: Yup.string()
                        .email('error format')
                        .required('required'),
                    })
                }
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
                render={({ errors, touched }) => (
                    <Form>
                        <div className="form-group">
                            <Field name="name" type="text" placeholder="Name and Surname" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field name="email" type="text" placeholder="E-Mail" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject" />
                        </div>
                        <div className="form-group">
                            <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary py-3 px-5">SEND</button>
                    </Form>
                )}
                />
                <FooterNav />
            </div>
        )
    }
}

export default Contact

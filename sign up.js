import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

//form template
import './css/style.css';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import { useState } from 'react';
// import {Button} from 'bootstrap';
// import {From} from 'bootstrap'
function App() {
    // const [value, setValue] = useState()
    return (

        // <Form>
        //     <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
        //     <Form.Label column sm={2}>
        //       Name
        //     </Form.Label>
        //     <Col sm={10}>
        //       <Form.Control type="text" placeholder="Name" />
        //     </Col>
        //   </Form.Group>
        //   <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        //     <Form.Label column sm={2}>
        //       Email
        //     </Form.Label>
        //     <Col sm={10}>
        //       <Form.Control type="email" placeholder="Email" />
        //     </Col>
        //   </Form.Group>


        //   <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        //     <Form.Label column sm={2}>
        //       Password
        //     </Form.Label>
        //     <Col sm={10}>
        //       <Form.Control type="password" placeholder="Password" />
        //     </Col>
        //   </Form.Group>

        //   <Form.Group as={Row} className="mb-3" controlId="formHorizontalPhoneNumber">
        //     <Form.Label column sm={2}>
        //       Phone Number
        //     </Form.Label>
        //     <Col sm={10}>
        //       <Form.Control type="number" placeholder="Phone Number" />
        //     </Col>
        //   </Form.Group>

        //   <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        //     <Col sm={{ span: 10, offset: 2 }}>
        //       <Form.Check label="Remember me" />
        //     </Col>
        //   </Form.Group>

        //   <Form.Group as={Row} className="mb-3">
        //     <Col sm={{ span: 10, offset: 2 }}>
        //       <Button type="submit">Sign in</Button>
        //     </Col>
        //   </Form.Group>
        // </Form>


        <div class="main">

            <section class="signup">
                <img src="images/signup-bg.jpg" alt="" />
                <div class="container">
                    <div class="signup-content">
                        <form method="POST" id="signup-form" class="signup-form">
                            <h2 class="form-title">Create account</h2>
                            <div class="form-group">
                                <input type="text" class="form-input" name="name" id="name" placeholder="Your Name" required />
                            </div>
                            {/* <div class="from-group">
                                <PhoneInput class="from-input "
                                    placeholder="Enter phone number"
                                    value={value}
                                    onChange={setValue} />
                            </div> */}
                            <div class="form-group">
                                <input type="number" class="form-input" name="PhoneNumber" id="PhoneNumber" placeholder="Your Phone Number" max="9999999999" required />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-input" name="email" id="email" placeholder="Your Email" required />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-input" name="password" id="password" placeholder="Password" required />
                                <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-input" name="re_password" id="re_password" placeholder="Repeat your password" required />
                            </div>

                            <div class="form-group">
                                <input type="submit" name="submit" id="submit" class="form-submit" value="Sign up" />
                            </div>
                        </form>
                        <p class="loginhere">
                            Have already an account ? <a href="#" class="loginhere-link">Login here</a>
                        </p>
                    </div>
                </div>
            </section>

        </div>


    );
}

export default App;

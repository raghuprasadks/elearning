import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import $ from 'jquery'
import {useNavigate} from "react-router-dom"

const SignUp = () => {
    const goto = useNavigate();
    const getAllUser = "http://localhost:8000/users";
    const [users, setUsers] = useState([]);

    const [user, setUser] = useState({ name: '', emailid: '', password: '', cpassword: '', accept: false });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [allmandatory, setAllmandatory] = useState(false);
    const validateUser = (inputValues) => {
        let errors = {};
        let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (inputValues.emailid && !emailRegex.test(inputValues.emailid)) {
            errors.email = "Invalid Email Id";
        }
        if (inputValues.password && inputValues.password.length < 5) {
            errors.password = "Password is too short";
        }
        if (inputValues.password && inputValues.cpassword && inputValues.password !== inputValues.cpassword) {
            errors.cpassword = "Password and Conform password should be same";
        }
        if (!user.accept || user.accept === "false") {
            errors.accept = "Please accept the aggrement";
        }
        // Check if the user exist

        if (users && user.emailid) {
            const isexist = users.filter((u) => { return u.emailid === user.emailid });
            if (isexist && isexist.length > 0)
                errors.email = "This user already registered";
        }
        setAllmandatory(false);
        return errors;
    };
    const createUser = (e) => {
        e.preventDefault();
        setSubmitting(false);
        setErrors(validateUser(user));
        if (Object.keys(errors).length === 0) {
            if (!user.name || !user.emailid || !user.password || !user.cpassword) {
                setAllmandatory(true);
                $("#success-alert-error").fadeTo(1000, 500).slideUp(500, function () {
                    $("#success-alert-error").slideUp(500);
                });
            } else if (!user.accept) {
                errors.accept = "Please accept the aggrement";
            } else {
                // setUsers([...users, { id: uuid(), ...user }]);
                // setUser({ name: "", emailid: "", password: '', cpassword: '', accept: false });
                setSubmitting(true);
            }
        }
    }
    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            setSubmitting(false);
            // Save the data
            const headers = {
                "Content-type": "application/json; charset=UTF-8"
            };
            const method = "POST";
            fetch(getAllUser, {
                method: method,
                headers: headers,
                body: JSON.stringify(user)
            })
                .then((response) => {
                    console.log(response)
                    if (response.status !== 201) {
                        return;
                    } else {
                        return response.json();
                    }
                })
                .then((data) => {
                    setSuccess(true);
                    setUser({ name: "", emailid: "", password: '', cpassword: '', accept: false });
                    $("#success-alert").fadeTo(1000, 500).slideUp(500, function () {
                        $("#success-alert").slideUp(500);
                    });
                    getUserList();
                    goto('/');
                    window.location.reload();
                })
                .catch((error) => { setSuccess(false); console.log(error) });

        }
    }, [errors, submitting]);
    useEffect(() => {
        setErrors(validateUser(user));
    }, [user]);

    const getUserList = () => {
        fetch(getAllUser)
            .then(response => response.json())
            .then(json => {
                setUsers(json);
            })
    }

    useEffect(() => {
        getUserList();
    }, [])

    return (
        <>
            <div className="contact">

                {/* <!-- Contact Info --> */}

                <div className="contact_info_container">
                    <div className="container">
                        <div className="row">

                            {/* <!-- Contact Form --> */}
                            <div className="col-lg-6">
                                <div className="contact_form">
                                    <div className="contact_info_title">Signup</div>
                                    {success ? (
                                        <div className="alert alert-success alert-dismissible" id="success-alert">
                                            <strong>Success!</strong> Registered Successfully!!!.
                                        </div>
                                    ) : null}
                                    {allmandatory ? (<div className="alert alert-danger alert-dismissible" id="success-alert-error">
                                        <strong>Error!</strong> Please enter all fields.
                                    </div>) : null}
                                    {allmandatory ? (<div className="alert alert-danger alert-dismissible" id="success-alert-error">
                                        <strong>Error!</strong> Please enter all fields.
                                    </div>) : null}
                                    <form action="#" className="comment_form">
                                        <div>
                                            <div className="form_title">Name</div>
                                            <input type="text" className="comment_input" required="required" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} style={{ border: errors.name ? "1px solid red" : null }} />
                                            {errors.name ? (
                                                <small id="nameHelp" className="text-danger">{errors.name}</small>
                                            ) : null}
                                        </div>
                                        <div>
                                            <div className="form_title">Email</div>
                                            <input type="email" className="comment_input" required="required" value={user.emailid} onChange={(e) => setUser({ ...user, emailid: e.target.value })} style={{ border: errors.email ? "1px solid red" : null }} />
                                            {errors.email ? (
                                                <small id="emailHelp" className="text-danger">{errors.email}</small>
                                            ) : null}
                                        </div>
                                        <div>
                                            <div className="form_title">Password</div>
                                            <input type="password" className="comment_input" required="required" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} style={{ border: errors.password ? "1px solid red" : null }} />
                                            {errors.password ? (
                                                <small id="passwordHelp" className="text-danger">{errors.password}</small>
                                            ) : null}
                                        </div>
                                        <div>
                                            <div className="form_title">Confirm Password</div>
                                            <input type="password" className="comment_input" required="required" value={user.cpassword} onChange={(e) => setUser({ ...user, cpassword: e.target.value })} style={{ border: errors.cpassword ? "1px solid red" : null }} />
                                            {errors.cpassword ? (
                                                <small id="cpasswordHelp" className="text-danger">{errors.cpassword}</small>
                                            ) : null}
                                        </div>

                                        <div>
                                            <input className="form_title" type="checkbox"
                                                value={user.accept} onChange={(e) => {
                                                    setUser({ ...user, accept: !user.accept })
                                                }} id="form2Example3c" />
                                            <label className="form-check-label" for="form2Example3"> &nbsp; I agree all statements in <a href="#!">Terms of service</a>
                                            </label>
                                            {errors.accept ? (
                                                <div><small id="passwordHelp" className="text-danger">{errors.accept}</small></div>
                                            ) : null}
                                        </div>
                                        <div>
                                            <button type="submit" className="comment_button trans_200" onClick={createUser}>Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* <!-- Contact Info --> */}
                            <div className="col-lg-6">
                                <div className="contact_info">
                                    <img src="images/draw1.webp"
                                        className="img-fluid" alt="Sample" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp
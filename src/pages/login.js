import React, { useState, useEffect } from "react";
import $ from 'jquery'
import { useNavigate } from "react-router-dom"

const Login = () => {
    const LOGGED_STORAGE_KEY = "loggeduser";
    const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem(LOGGED_STORAGE_KEY)) ?? { id: null, name: '', emailid: '' });
    const goto = useNavigate();
    const [error, setError] = useState(false);
    const [login, setLogin] = useState({ emailid: "", password: "" })

    const loginUser = (e) => {
        e.preventDefault();
        setError(false);

        const getUser = `http://localhost:8000/users?emailid=${login.emailid}&password=${login.password}`;
        fetch(getUser)
            .then(response => response.json())
            .then(json => {
                if (json && json.length > 0) {
                    const user = json[0];
                    if (user && user.id) {
                        setLoggedUser(user);
                        localStorage.setItem(LOGGED_STORAGE_KEY, JSON.stringify(user));
                        goto("/");
                        window.location.reload();
                    }
                } else {
                    setError(true);
                    $("#success-alert-error").fadeTo(1000, 500).slideUp(500, function () {
                        $("#success-alert-error").slideUp(500);
                    });
                }
            }).catch((err) => {
                setError(true);
                $("#success-alert-error").fadeTo(1000, 500).slideUp(500, function () {
                    $("#success-alert-error").slideUp(500);
                });
            })
    }

    useEffect(() => {
        // Get logged user details
        // if (loggedUser && loggedUser.id) {
        //     goto("/");
        //     window.location.reload();
        // }
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
                                    {!loggedUser.id ? <div className="contact_info_title">Login</div> : ''}
                                    {error ? (<div className="alert alert-danger alert-dismissible" id="success-alert-error">
                                        <strong>Error!</strong> Invalid User.
                                    </div>) : null}
                                    {loggedUser.id ? <h1 className="alert alert-success">Welcome {loggedUser.name}</h1> : ''}
                                    <form action="#" className="comment_form">
                                        <div>
                                            <div className="form_title">Email</div>
                                            <input type="email" className="comment_input" required="required" value={login.emailid} onChange={(e) => setLogin({ ...login, emailid: e.target.value })} />
                                        </div>
                                        <div>
                                            <div className="form_title">Password</div>
                                            <input type="password" className="comment_input" required="required" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} />
                                        </div>
                                        <div>
                                            <button type="submit" className="comment_button trans_200" onClick={loginUser}>Sign In</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* <!-- Contact Info --> */}
                            <div className="col-lg-6">
                                <div className="contact_info">
                                    <img src="images/login.jpg"
                                        className="img-fluid" alt="Sample" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

        // <div className='col-xs-12'>
        //     <div className='col-xs-3'></div>
        //     <form className='col-xs-6 text-center '>
        //         {error ? (<div className="alert alert-danger alert-dismissible" id="success-alert-error">
        //             <strong>Error!</strong> Invalid User.
        //         </div>) : null}
        //         {loggedUser.id ? <h1 className="alert alert-success">Welcome {loggedUser.name}</h1> : ''}
        //          {/* Email input  */}
        //         <div className="form-outline mb-4">
        //             <input type="email" id="form1Example1" className="form-control" value={login.emailid} onChange={(e) => setLogin({ ...login, emailid: e.target.value })} />
        //             <label className="form-label" for="form1Example1">Email address</label>
        //         </div>

        //          {/* Password input  */}
        //         <div className="form-outline mb-4">
        //             <input type="password" id="form1Example2" className="form-control" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} />
        //             <label className="form-label" for="form1Example2">Password</label>
        //         </div>

        //          {/* Submit button  */}
        //          <button type="button" className="btn btn-primary btn-lg" onClick={loginUser}>Sign in</button>
        //     </form>
        //     <div className='col-xs-3'></div>
        // </div>
    )
}

export default Login
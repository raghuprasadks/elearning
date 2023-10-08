import React, { useState,useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Menu = () => {
    const goto = useNavigate();
    const LOGGED_STORAGE_KEY = "loggeduser";
    const [loggedUser,setLoggedUser] = useState(JSON.parse(localStorage.getItem(LOGGED_STORAGE_KEY)) ?? {id:null,name:'',emailid:'',password:''});

    const logout = () => {
        localStorage.removeItem(LOGGED_STORAGE_KEY);
        setLoggedUser(JSON.parse(localStorage.getItem(LOGGED_STORAGE_KEY)) ?? { id: null, name: '', emailid: '', password: '' });
        // goto("/");
        // window.location.reload();
    }

    useEffect(() => {
        setLoggedUser(JSON.parse(localStorage.getItem(LOGGED_STORAGE_KEY)) ?? { id: null, name: '', emailid: '', password: '' });
    },[])
    return (
        <>
            <div className="super_container">
                <header className="header">
                    <div className="header_container">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="header_content d-flex flex-row align-items-center justify-content-start">
                                        <div className="logo_container">
                                            <Link to="/">
                                                <div className="logo_text">Unic<span>at</span></div>
                                            </Link>
                                        </div>
                                        <nav className="main_nav_contaner ml-auto">
                                            <ul className="main_nav">
                                                <li className="active"><Link to="/">Home</Link></li>
                                                <li><Link to="/contactus">Contact</Link></li>
                                                {!loggedUser.id ? (
                                                    <>
                                                        <li><Link to="/signup"><i className="fa fa-user" aria-hidden="true"></i> Signup</Link></li>
                                                        <li><Link to="/login"><i className="fa fa-lock" aria-hidden="true"></i> Login</Link></li>
                                                    </>
                                                ) : ''}
                                                {loggedUser.id ? (
                                                    <>
                                                        <li><Link onClick={logout}><i className="fa fa-user" aria-hidden="true"></i> Hi {loggedUser.name}</Link></li>
                                                        <li><Link onClick={logout}><i className="fa fa-unlock" aria-hidden="true"></i> Logout</Link></li>
                                                    </>
                                                ) : ''}
                                            </ul>
                                        </nav>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
                    <div className="menu_close_container"><div className="menu_close"><div></div><div></div></div></div>
                    <div className="search">
                        <form action="#" className="header_search_form menu_mm">
                            <input type="search" className="search_input menu_mm" placeholder="Search" required="required" />
                                <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
                                    <i className="fa fa-search menu_mm" aria-hidden="true"></i>
                                </button>
                        </form>
                    </div>
                    <nav className="menu_nav">
                        <ul className="menu_mm">
                            <li className="menu_mm"><Link to="/">Home</Link></li>
                            <li className="menu_mm"><Link to="/aboutus">About</Link></li>
                            <li className="menu_mm"><Link to="/signup">Signup</Link></li>
                            <li className="menu_mm"><Link to="/login">Login</Link></li>
                        </ul>
                    </nav>
                </div>
                <Outlet></Outlet>
                <footer className="footer">
                    <div className="footer_background" style={{ backgroundImage: "images / footer_background.png" }}></div>
                    <div className="container">
                        <div className="row footer_row">
                            <div className="col">
                                <div className="footer_content">
                                    <div className="row">

                                        <div className="col-lg-3 footer_col">

                                            {/* <!-- Footer About --> */}
                                            <div className="footer_section footer_about">
                                                <div className="footer_logo_container">
                                                    <Link to="/">
                                                        <div className="footer_logo_text">Unic<span>at</span></div>
                                                    </Link>
                                                </div>
                                                <div className="footer_about_text">
                                                    <p>Lorem ipsum dolor sit ametium, consectetur adipiscing elit.</p>
                                                </div>
                                                <div className="footer_social">
                                                    <ul>
                                                        <li><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-lg-3 footer_col">

                                            {/* <!-- Footer Contact --> */}
                                            <div className="footer_section footer_contact">
                                                <div className="footer_title">Contact Us</div>
                                                <div className="footer_contact_info">
                                                    <ul>
                                                        <li>Email: Info.deercreative@gmail.com</li>
                                                        <li>Phone:  +(88) 111 555 666</li>
                                                        <li>40 Baria Sreet 133/2 New York City, United States</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-lg-3 footer_col">

                                            {/* <!-- Footer links --> */}
                                            <div className="footer_section footer_links">
                                                <div className="footer_title">Contact Us</div>
                                                <div className="footer_links_container">
                                                    <ul>
                                                        <li><Link to="index.html">Home</Link></li>
                                                        <li><Link to="about.html">About</Link></li>
                                                        <li><Link to="contact.html">Contact</Link></li>
                                                        <li><Link to="/">Features</Link></li>
                                                        <li><Link to="courses.html">Courses</Link></li>
                                                        <li><Link to="/">Events</Link></li>
                                                        <li><Link to="/">Gallery</Link></li>
                                                        <li><Link to="/">FAQs</Link></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-lg-3 footer_col clearfix">

                                            {/* <!-- Footer links --> */}
                                            <div className="footer_section footer_mobile">
                                                <div className="footer_title">Mobile</div>
                                                <div className="footer_mobile_content">
                                                    <div className="footer_image"><Link to="/"><img src="images/mobile_1.png" alt="" /></Link></div>
                                                    <div className="footer_image"><Link to="/"><img src="images/mobile_2.png" alt="" /></Link></div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row copyright_row">
                            <div className="col">
                                <div className="copyright d-flex flex-lg-row flex-column align-items-center justify-content-start">
                                    <div className="cr_text">
                                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}

                                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
                                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                        </div>
                                    <div className="ml-lg-auto cr_links">
                                        <ul className="cr_list">
                                            <li><Link to="/">Copyright notification</Link></li>
                                            <li><Link to="/">Terms of Use</Link></li>
                                            <li><Link to="/">Privacy Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
        // <div>
        //     <nav className="navbar navbar-inverse">
        //         <div className="container-fluid">
        //             <div className="navbar-header">
        //                 <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        //                     <span className="icon-bar"></span>
        //                     <span className="icon-bar"></span>
        //                     <span className="icon-bar"></span>
        //                 </button>
        //                 <Link className="navbar-brand" to="/">IQVIA</Link>
        //             </div>
        //             <div className="collapse navbar-collapse" id="myNavbar">
        //                 <ul className="nav navbar-nav">
        //                     <li className="active"><Link to="/">Home</Link></li>
        //                     <li ><Link to="/contactus">Contact Us</Link></li>

        //                 </ul>
        //                 <ul className="nav navbar-nav navbar-right">
        //                     {!loggedUser.id ? (
        //                         <>
        //                             <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
        //                             <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
        //                         </>
        //                     ) : ''}
        //                     {loggedUser.id ? (
        //                         <>
        //                             <li><Link to="/"><span className="glyphicon glyphicon-user"></span> Welcome {loggedUser.name}</Link></li>
        //                             <li><Link onClick={logout}><span className="glyphicon glyphicon-log-in"></span> Logout</Link></li>
        //                         </>
        //                     ) : ''}
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        //     <Outlet></Outlet>
        // </div>
    )
}

export default Menu
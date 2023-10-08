import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube'
// import 

const Home = () => {
    const couseUrl = "http://localhost:8000/cources";
    const [cources,setCources] = useState([]);
    const opts = {
        width: '100%',
        height:'300'
    };

    useEffect(() => {
        fetch(couseUrl).then(response => response.json()).then(data => {
            setCources(data);
        }).catch()
    }, [])
    return (
        <>
            <div className="features">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section_title_container text-center">
                                <h2 className="section_title">Welcome To E-Learning</h2>
                                <div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="row features_row">


                        {/* <!-- Features Item --> */}

                        <div className="col-lg-3 feature_col">
                            <div className="feature text-center trans_400">
                                <div className="feature_icon"><img src="images/icon_1.png" alt="" /></div>
                                <h3 className="feature_title">The Experts</h3>
                                <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                            </div>
                        </div>


                        {/* <!-- Features Item --> */}

                        <div className="col-lg-3 feature_col">
                            <div className="feature text-center trans_400">
                                <div className="feature_icon"><img src="images/icon_2.png" alt="" /></div>
                                <h3 className="feature_title">Book & Library</h3>
                                <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                            </div>
                        </div>


                        {/* <!-- Features Item --> */}

                        <div className="col-lg-3 feature_col">
                            <div className="feature text-center trans_400">
                                <div className="feature_icon"><img src="images/icon_3.png" alt="" /></div>
                                <h3 className="feature_title">Best Courses</h3>
                                <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                            </div>
                        </div>


                        {/* <!-- Features Item --> */}

                        <div className="col-lg-3 feature_col">
                            <div className="feature text-center trans_400">
                                <div className="feature_icon"><img src="images/icon_4.png" alt="" /></div>
                                <h3 className="feature_title">Award & Reward</h3>
                                <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* <!-- Popular Courses --> */}


            <div className="courses">
                <div className="section_background parallax-window" data-parallax="scroll" data-image-src="images/courses_background.jpg" data-speed="0.8"></div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section_title_container text-center">
                                <h2 className="section_title">Popular Online Courses</h2>
                                <div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="row courses_row">


                        {/* <!-- Course --> */}

                        {cources.map((cource) =>
                            <div className="col-lg-4 course_col">
                                <div className="course">
                                    <div className="course_image">
                                        {/* <img src="images/course_1.jpg" alt="" /> */}
                                        <YouTube videoId={cource.url} opts={opts} />
                                    </div>
                                    <div className="course_body">
                                        <h3 className="course_title"><Link>{cource.title}</Link></h3>
                                        <div className="course_teacher">{cource.author}</div>
                                        <div className="course_text">
                                            <p>{cource.desc}</p>
                                        </div>
                                    </div>
                                    <div className="course_footer">
                                        <div className="course_footer_content d-flex flex-row align-items-center justify-content-start">
                                            <div className="course_info">
                                                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                                                <span>{cource.subscribers} Subscibers</span>
                                            </div>
                                            <div className="course_info">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <span>{cource.rating} Ratings</span>
                                            </div>
                                            <div className="course_price ml-auto">${cource.price}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="courses_button trans_200"><Link href="#">view all courses</Link></div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- Events --> */}


            <div className="events">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section_title_container text-center">
                                <h2 className="section_title">Upcoming events</h2>
                                <div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="row events_row">


                        {/* <!-- Event --> */}

                        <div className="col-lg-4 event_col">
                            <div className="event event_left">
                                <div className="event_image"><img src="images/event_1.jpg" alt="" /></div>
                                <div className="event_body d-flex flex-row align-items-start justify-content-start">
                                    <div className="event_date">
                                        <div className="d-flex flex-column align-items-center justify-content-center trans_200">
                                            <div className="event_day trans_200">21</div>
                                            <div className="event_month trans_200">Aug</div>
                                        </div>
                                    </div>
                                    <div className="event_content">
                                        <div className="event_title"><Link href="#">Which Country Handles Student Debt?</Link></div>
                                        <div className="event_info_container">
                                            <div className="event_info"><i className="fa fa-clock-o" aria-hidden="true"></i><span>15.00 - 19.30</span></div>
                                            <div className="event_info"><i className="fa fa-map-marker" aria-hidden="true"></i><span>25 New York City</span></div>
                                            <div className="event_text">
                                                <p>Policy analysts generally agree on a need for reform, but not on which path...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <!-- Event --> */}

                        <div className="col-lg-4 event_col">
                            <div className="event event_mid">
                                <div className="event_image"><img src="images/event_2.jpg" alt="" /></div>
                                <div className="event_body d-flex flex-row align-items-start justify-content-start">
                                    <div className="event_date">
                                        <div className="d-flex flex-column align-items-center justify-content-center trans_200">
                                            <div className="event_day trans_200">27</div>
                                            <div className="event_month trans_200">Aug</div>
                                        </div>
                                    </div>
                                    <div className="event_content">
                                        <div className="event_title"><Link href="#">Repaying your student loans (Winter 2017-2018)</Link></div>
                                        <div className="event_info_container">
                                            <div className="event_info"><i className="fa fa-clock-o" aria-hidden="true"></i><span>09.00 - 17.30</span></div>
                                            <div className="event_info"><i className="fa fa-map-marker" aria-hidden="true"></i><span>25 Brooklyn City</span></div>
                                            <div className="event_text">
                                                <p>This Consumer Action News issue covers topics now being debated before...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <!-- Event --> */}

                        <div className="col-lg-4 event_col">
                            <div className="event event_right">
                                <div className="event_image"><img src="images/event_3.jpg" alt="" /></div>
                                <div className="event_body d-flex flex-row align-items-start justify-content-start">
                                    <div className="event_date">
                                        <div className="d-flex flex-column align-items-center justify-content-center trans_200">
                                            <div className="event_day trans_200">01</div>
                                            <div className="event_month trans_200">Sep</div>
                                        </div>
                                    </div>
                                    <div className="event_content">
                                        <div className="event_title"><Link href="#">Alternative data and financial inclusion</Link></div>
                                        <div className="event_info_container">
                                            <div className="event_info"><i className="fa fa-clock-o" aria-hidden="true"></i><span>13.00 - 18.30</span></div>
                                            <div className="event_info"><i className="fa fa-map-marker" aria-hidden="true"></i><span>25 New York City</span></div>
                                            <div className="event_text">
                                                <p>Policy analysts generally agree on a need for reform, but not on which path...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* <!-- Team --> */}


            <div className="team">
                <div className="team_background parallax-window" data-parallax="scroll" data-image-src="images/team_background.jpg" data-speed="0.8"></div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section_title_container text-center">
                                <h2 className="section_title">The Best Tutors in Town</h2>
                                <div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="row team_row">


                        {/* <!-- Team Item --> */}

                        <div className="col-lg-3 col-md-6 team_col">
                            <div className="team_item">
                                <div className="team_image"><img src="images/team_1.jpg" alt="" /></div>
                                <div className="team_body">
                                    <div className="team_title"><Link href="#">Jacke Masito</Link></div>
                                    <div className="team_subtitle">Marketing & Management</div>
                                    <div className="social_list">
                                        <ul>
                                            <li><Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <!-- Team Item --> */}

                        <div className="col-lg-3 col-md-6 team_col">
                            <div className="team_item">
                                <div className="team_image"><img src="images/team_2.jpg" alt="" /></div>
                                <div className="team_body">
                                    <div className="team_title"><Link href="#">William James</Link></div>
                                    <div className="team_subtitle">Designer & Website</div>
                                    <div className="social_list">
                                        <ul>
                                            <li><Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <!-- Team Item --> */}

                        <div className="col-lg-3 col-md-6 team_col">
                            <div className="team_item">
                                <div className="team_image"><img src="images/team_3.jpg" alt="" /></div>
                                <div className="team_body">
                                    <div className="team_title"><Link href="#">John Tyler</Link></div>
                                    <div className="team_subtitle">Quantum mechanics</div>
                                    <div className="social_list">
                                        <ul>
                                            <li><Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <!-- Team Item --> */}

                        <div className="col-lg-3 col-md-6 team_col">
                            <div className="team_item">
                                <div className="team_image"><img src="images/team_4.jpg" alt="" /></div>
                                <div className="team_body">
                                    <div className="team_title"><Link href="#">Veronica Vahn</Link></div>
                                    <div className="team_subtitle">Math & Physics</div>
                                    <div className="social_list">
                                        <ul>
                                            <li><Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
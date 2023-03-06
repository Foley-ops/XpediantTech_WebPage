import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';


function Home() {
    return (

        <div>
            <div className='box1'>

                <div className="">

                    <div className="container justify-content-between ">

                        <div className="">
                            <div className="row d-flex align-items-center justify-content-center ">
                                <div className="col-sm-4 gy-5">
                                    <img src="https://xpedienttech.com/wp-content/uploads/2022/05/cropped-logo-thick-1-240x80.jpg" alt='company logo' className="img-fluid text=start"></img>
                                </div>
                                <div className="col-sm-7 gy-5 gx-0 ">
                                    <ul className="list-inline flex-container">
                                        <Link to="/" className="list-inline-item">HOME</Link>
                                        <Link to="/services" className="list-inline-item">SERVICES</Link>
                                        <Link to="/about" className="list-inline-item">ABOUT</Link>
                                        <Link to="/contact" className="list-inline-item">CONTACT</Link>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div>
                            <div className='container' >
                                <h1 className='extra-large-text row p-4 m-5 ' >Consulting Partner That Thrives on Your Success</h1>
                            </div>
                        </div>
                        <div className='row justify-content-end'>
                            <h1 className=' small-text justify-content-end ' style={{ maxWidth: '40%', lineHeight: 1.6 }}>
                                We have the expertise and experience to provide
                                digital solutions that help your organization stay agile
                                and competitive. Our focus has always been on providing expedient solutions that
                                maximize business value.
                            </h1>
                        </div>

                        <div className='text-center'>



                            <h1 className=' small-text pt-4'>
                                <i className=' fas fa-arrow-down' style={{ color: 'white' }}></i>
                                Find out how!
                            </h1>
                        </div>


                    </div>
                </div>
            </div>
            <div className='box2'>
                <div className='container'>
                    <h1 className='pl-3 pt-5'>
                        Hire Us For
                    </h1>
                    <div className='row w-10 p-3 '>
                        <div className='col '>
                            <h2 className="text-center">Development</h2>
                            <p>Looking out for customized solutions to develop capabilities?
                                Our team has decades of experience in developing and maintaining enterprise applications
                                used by thousands of users every day.</p>
                        </div>
                        <div className='col'>
                            <h2 className="text-center">Managed Services</h2>
                            <p>Based on extensive experience in maintaining cloud infrastructure across three major
                                public clouds: GCP, AWS, and Azure, we offer partial or complete management of your
                                cloud infrastructure. Management responsibilities include migration, configuration,
                                optimization, security, and maintenance.</p>
                        </div>
                        <div className='col'>
                            <h2 className="text-center">Training and Staff Augmentation</h2>
                            <p>Through our Training and Staff Augmentation services,
                                you can reduce the cost of acquiring niche skills and meet aggressive project
                                timelines to stay nimble and ahead of your competitors.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='box3'>
                <div className='container'>
                    <div>
                        <h1 className='pl-3 pt-5'>About Us</h1>
                        <h2 className='p-2 w-75'>Xpedient Technologies LLC was founded in 2007,
                            focusing on providing quality information technology training and consulting services to its clients.
                            During its 14+ years of existence, the company has executed successful projects for several Texas
                            state agencies and fortune 500 companies.</h2>
                    </div>
                    <div className='flex-container p-3'>
                        <div>
                            <div className='pb-5'>
                                <h1>Mission.</h1>
                                <h2 className='w-75'>Our mission is to provide quality, expedient,
                                    and innovative technology solutions that help our clients maximize business value
                                    and stay competitive</h2>
                            </div>
                            <div>
                                <h1>Vision.</h1>
                                <h2 className='w-75'>Our vision is to become a leading, trusted, and reliable IT consulting partner
                                    that helps companies of all sizes in their journey to a digital future</h2>
                            </div>
                        </div>
                        <div>
                            <img src='https://i0.wp.com/xpedienttech.com/wp-content/uploads/2021/05/about.jpg?w=600&ssl=1' className='img-fluid box3-img' alt='Lady on the phone at her office desk talking to somebody.'></img>
                        </div>
                    </div>

                </div>
            </div>
            <div className='box4'>
                <div className='container'>
                    <div>
                        <h1 className='text-center pb-5 pt-5'>Clients We Worked With</h1>
                    </div>
                    <div className=' justify-content-center align-items-center text-center'>
                        <img src='https://i0.wp.com/xpedienttech.com/wp-content/uploads/2022/05/dfps-2.png?fit=300%2C70&ssl=1' alt='Texas Department of Family and Protective Services' className='p-1' ></img>
                        <img src='https://i0.wp.com/xpedienttech.com/wp-content/uploads/2022/05/xerox-3.png?fit=300%2C70&ssl=1' alt='Xerox' className='p-1'></img>
                        <img src='https://i0.wp.com/xpedienttech.com/wp-content/uploads/2022/05/hhsc.png?fit=300%2C70&ssl=1' alt='Texas Health and Human Services' className='p-1 '></img>
                        <img src='https://i0.wp.com/xpedienttech.com/wp-content/uploads/2022/05/dshs.png?fit=300%2C70&ssl=1' alt='Texas Health and Human Serivces Department of State Health Services' className='p-1'></img>

                    </div>
                </div>
                <div className='container pt-5'>
                    <div>
                        <h1>Why Choose Us?</h1>
                    </div>
                    <div className='row'>
                        <div className='col w-50 p-3'>
                            <h2>We are the right term for your business.
                                We have the expertise and knowledge to
                                offer impartial advice and services at an honest price.</h2>
                        </div>
                        <div className='col w-50 p-3 '>
                            <h2>With us you’ll feel heard. We listen to our client requirements and then select the right solution that fits.
                                We care for your business as our own. We take a sincere interest in it and
                                genuinely want to help your company reach its potential.</h2>
                        </div>
                    </div>
                </div>
                <div className='container pt-5 borderyellow'>
                    <div className='row'>
                        <div className='col'>
                            <h2>Your Trusted Parter</h2>
                            <h1>Highly Motivated Team with Innovative Ideas</h1>
                        </div>
                        <div className='col'>
                            <h2>We love what we do and therefore come up with the best possible
                                solutions to help your company stay competitive. We are your
                                trusted partners you can count on.</h2>
                        </div>
                    </div>
                    <div>
                        <div className='row text-center pt-5'>
                            <div className='col'>
                                <img src='https://i0.wp.com/xpedienttech.com/wp-content/uploads/2021/05/gallery-1.jpg?w=758&ssl=1' alt='Overhead of two guys on laptops wearing headphones, working on a wooden table.' className='img-fluid  '></img>

                            </div>
                            <div className='col'>
                                <img src='https://i0.wp.com/xpedienttech.com/wp-content/uploads/2021/05/gallery-2.jpg?w=758&ssl=1' alt='Board meeting with one guy pointing a marker at the board with notes and 3 others sitting in seats with their laptops on their lap.' className='img-fluid'></img>

                            </div>
                            <div className='col'>
                                <img src='https://i0.wp.com/xpedienttech.com/wp-content/uploads/2021/05/gallery-3.jpg?w=758&ssl=1' alt='A Board meeting with a guy pointing a marker at a laptop moniter. There are three others at a table, one on a laptop, one looking at the moniter, and the last person picking up some papers from the center of the table.' className='img-fluid'></img>

                            </div>
                        </div>
                    </div>
                    <div className='text-center pt-5'>
                        <h1>Our Partner</h1>
                        <img src='https://i0.wp.com/xpedienttech.com/wp-content/uploads/2022/05/Salesforce-logo.jpg?resize=150%2C150&ssl=1' alt='Salesforce logo, in a blue cloud'></img>
                    </div>
                </div>
            </div>
            <div className='box5'>
                <div className='container row pt-4 pb-2'>
                    <div className='col'>
                        <img src="https://xpedienttech.com/wp-content/uploads/2022/05/HUB-1.png" alt="State of Texas stamp" style={{minWidth: '220px', maxWidth: '220px', width: '100%'}}></img>
                    </div>

                    <ul className="text-end list-inline-bottom col">
                        <Link to="/" className="list-inline-item p-2">HOME</Link>
                        <Link to="/services" className="list-inline-item p-2">SERVICES</Link>
                        <Link to="/about" className="list-inline-item p-2">ABOUT</Link>
                        <Link to="/contact" className="list-inline-item p-2">CONTACT</Link>
                    </ul>
                </div>
                <div className='w-50'>
                    <h2 className='container pb-5'>4199 Woodhaven Trl, Round Rock, TX 78665
                        contact@xpedienttech.com</h2>

                </div>
                <div className='text-center pt-3 border-white'>
                    <p>Copyright © 2023 Xpedient | Powered by Xpedient</p>
                </div>
            </div>
        </div>
    );

}


export default Home;

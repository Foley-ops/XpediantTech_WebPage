import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
    return (
        <div>
            <div className='box1'>

                <div className="container-md">

                    <div className="container justify-content-between ">



                        <div className="container">
                            <div className="row d-flex align-items-center justify-content-center">
                                <div className="col-sm-4 gy-5 gx-0">
                                    <img max-width="240" height="80" src="https://xpedienttech.com/wp-content/uploads/2022/05/cropped-logo-thick-1-240x80.jpg" alt='company logo'></img>
                                </div>
                                <div className="col-sm-4 gy-5 gx-0 ">
                                    <ul className="list-inline flex-container">
                                        <Link to="/" className="list-inline-item"><a>HOME</a></Link>
                                        <Link to="/services" className="list-inline-item"><a>SERVICES</a></Link>
                                        <Link to="/about" className="list-inline-item"><a>ABOUT</a></Link>
                                        <Link to="/contact" className="list-inline-item"><a>CONTACT</a></Link>
                                    </ul>
                                </div>
                                <div className="col-sm-4 gy-5 gx-0">
                                    <img decoding="async" loading="lazy" src="https://xpedienttech.com/wp-content/uploads/2022/05/HUB-1.png" alt="State of Texas stamp" className="img-fluid"></img>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='container' >
                                <h1 className='extra-large-text row p-4 m-5' >Consulting Partner That Thrives on Your Success</h1>
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
                <div>
                    <h1>
                        Hire Us For
                    </h1>
                    <div className='flex-container w-50 p-3 align-items-center'>
                        <div className=''>
                            <h2>Development</h2>
                            <p>Looking out for customized solutions to develop capabilities?
                                Our team has decades of experience in developing and maintaining enterprise applications
                                used by thousands of users every day.</p>
                        </div>
                        <div>
                            <h2>Managed Services</h2>
                            <p>Based on extensive experience in maintaining cloud infrastructure across three major
                                public clouds: GCP, AWS, and Azure, we offer partial or complete management of your
                                cloud infrastructure. Management responsibilities include migration, configuration,
                                optimization, security, and maintenance.</p>
                        </div>
                        <div>
                            <h2>Training and Staff Augmentation</h2>
                            <p>Through our Training and Staff Augmentation services,
                                you can reduce the cost of acquiring niche skills and meet aggressive project
                                timelines to stay nimble and ahead of your competitors.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box3'>
                <div >
                    <div>
                        <h1>About Us</h1>
                        <h2>Xpedient Technologies LLC was founded in 2007,
                            focusing on providing quality information technology training and consulting services to its clients.
                            During its 14+ years of existence, the company has executed successful projects for several Texas
                            state agencies and fortune 500 companies.</h2>
                    </div>
                    <div className='flex-container p-3'>
                        <div>
                            <div>
                                <h1>Mission.</h1>
                                <h2>Our mission is to provide quality, expedient,
                                    and innovative technology solutions that help our clients maximize business value
                                    and stay competitive</h2>
                            </div>
                            <div>
                                <h1>Vision.</h1>
                                <h2>Our vision is to become a leading, trusted, and reliable IT consulting partner
                                    that helps companies of all sizes in their journey to a digital future</h2>
                            </div>
                        </div>
                        <div>
                            <img src='https://i0.wp.com/xpedienttech.com/wp-content/uploads/2021/05/about.jpg?w=600&ssl=1' style={{ width: '520px', height: '624px' }} alt=''></img>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;
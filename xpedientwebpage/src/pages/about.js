import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/services.css';
import '../styles/home.css';


function About() {
    return (
        <div>
            <div className='box1'>

                <div className="container pt-2">
                            <div className="row justify-content-center align-items-center ">
                                <div className="text-center col">
                                    <img src="https://xpedienttech.com/wp-content/uploads/2022/05/cropped-logo-thick-1-240x80.jpg" alt='company logo' className="img-fluid text=start"></img>
                                </div>
                                <div className='text-center col'>
                                    <img src="https://xpedienttech.com/wp-content/uploads/2022/05/HUB-1.png" alt="State of Texas stamp" style={{ minWidth: '220px', maxWidth: '300px', width: '100%' }}></img>
                                </div>
                                <div className="col text-center text-shrink">
                                    <ul className="list-inline flex-container">
                                        <Link to="/" className="list-inline-item">HOME</Link>
                                        <Link to="/services" className="list-inline-item">SERVICES</Link>
                                        <Link to="/about" className="list-inline-item">ABOUT</Link>
                                        <Link to="/contact" className="list-inline-item">CONTACT</Link>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className='container pt-5'>
                        <div className='yellow-dash'></div>
                        <div>
                            <h1 className='title'>About</h1>
                        </div>
                    </div>

            </div>
            

            <div className='box3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-center align-items-center'>
                            <img src='https://i0.wp.com/xpedienttech.com/wp-content/uploads/2021/05/about.jpg?w=600&ssl=1' className='img-fluid box3-img' alt='Lady on the phone at her office desk talking to somebody.'></img>
                        </div>
                        <div className='col mt-5 text-shrink'>
                            <div className='col mb-5'>
                                <p className='indented-first-line'>
                                    We are a team of IT
                                    experts with over 25 years of experience across
                                    IT areas such as Enterprise Application Development, Enterprise Data Management,
                                    Enterprise Data Governance, and Cloud Services focused on helping businesses in
                                    their digital transformation.
                                </p>
                            </div>
                            <div className='col'>
                                <p className='indented-first-line'>
                                    We support your IT initiatives by providing architectural, operational, and implementation planning. Architecture planning includes advisory services
                                    based on knowledge of emerging technologies to create the logical design of the system and the supporting infrastructure to meet your requirements.
                                    Operational assessment includes services that assess your IT environment’s operating efficiency and capacity. Implementation planning includes services to advise you
                                    on the rollout and testing of new solution deployments.
                                </p>
                            </div>
                            <div className='col mt-5'>
                                <h1 className='mb-1'>Our Core Values</h1>
                                <div className='m-4'>
                                    <p className='dashed-text'>Committed to delivering the best</p>
                                    <p className='dashed-text'>Honest and transparent services</p>
                                    <p className='dashed-text'>We care for your business just like our</p>
                                    <p className='dashed-text'>Keep learning and adapting to new technologies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='box5'>
                <div className=' row pt-4 pb-2 pr-1'>

                    <ul className="text-end list-inline-bottom col">
                        <Link to="/" className="list-inline-item p-2">HOME</Link>
                        <Link to="/services" className="list-inline-item p-2">SERVICES</Link>
                        <Link to="/about" className="list-inline-item p-2">ABOUT</Link>
                        <Link to="/contact" className="list-inline-item p-2">CONTACT</Link>
                    </ul>
                </div>
                <div className='w-50'>
                    <h2 className='container pb-5' >4199 Woodhaven Trl, Round Rock, TX 78665
                        contact@xpedienttech.com</h2>

                </div>
                <div className='text-center pt-3'>
                    <p>Copyright © 2023 Xpedient | Powered by Xpedient</p>
                </div>
            </div>
        </div>
    );
}

export default About;
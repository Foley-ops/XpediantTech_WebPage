import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/services.css';
import '../styles/home.css';


function Services() {
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
                        <div className='container mt-5'>
                            <div className='yellow-dash'></div>
                            <div>
                                <h1 className='title'>Services</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='box3'>
                <div className='container text-shrink'>
                    <div>
                        <h1 className='text-center p-5 pb-3'>How can we help you?</h1>
                    </div>
                    <div className='row dotted-border-part-top'>
                        <div className='col  pt-3'>
                            <h2 className='h2-top-text'>
                                Application Development
                            </h2>
                            <p className='indented-first-line'>
                                We specialize in developing cloud-native enterprise applications based on the 12-factor app methodology.
                                It gives you great flexibility in hosting applications in either your data center or any public/private/hybrid clouds.
                            </p>
                        </div>
                        <div className='col dotted-border-part-sides pt-3'>
                            <h2 className='h2-top-text'>
                                Data Engineering and Analytics
                            </h2>
                            <p className='indented-first-line'>
                                We develop robust data ingestion, cleansing, and transformation data flows to make quality
                                data available and enable organizations to discover insights from it.
                            </p>
                        </div>
                        <div className='col  pt-3'>
                            <h2 className='h2-top-text'>
                                Data Management and Governance
                            </h2>
                            <p className='indented-first-line'>
                                We help organizations manage the ever-increasing flow of enterprise data and establish
                                policies, processes, and procedures to ensure security and compliance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box3-background'>
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
                </div>
                <div className='box3-services text-shrink container'>
                    <div className='row p-0'>
                        <div className='col p-4 col-sm-6 '>
                            <h2 className='h2-top-text'>Have a Project on mind?</h2>
                            <p className='mt-3'>We can help you bring your ideas to life. Let’s talk about what we can build and raise together.</p>
                        </div>
                        <div className='col-sm-6 d-flex justify-content-center align-items-center'>
                            <img src="https://i0.wp.com/xpedienttech.com/wp-content/uploads/2021/05/cta-img.jpg?resize=768%2C542&ssl=1" className='img-fluid' alt='Two men in a white room next to a window on their right. Both sitting at a desk working on laptops. '></img>
                        </div>
                    </div>

                </div>
            </div>
            <div className='box1 border-white-2'>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className='col'>
                            <h1>Let us together build a flourishing business</h1>
                        </div>
                        <div className='col text-shrink'>
                            <h2>When connected with us, you aren’t growing your business alone. We put in
                                our best to contribute to the growth of your entire team and organization. So, if you are
                                looking for the right partner that’ll help you with your digital transformation, we are right here!</h2>
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

export default Services;
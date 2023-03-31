import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/services.css';
import '../styles/home.css';
import { useState } from 'react';





function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission logic here
    };
    return (
        <div className='box'>
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
                        <h1 className='title'>Contact</h1>
                    </div>
                </div>

            </div>
            <div className='box3 d-flex justify-content-center text-shrink'>
                <div className='row container '>
                    <div className='col mt-5'>
                        <h1 className='mb-5'>We are here to help!</h1>
                        <div>
                            <h2 className='mb-3'>4199 Woodhaven Trl, Round Rock, TX 78665</h2>
                            <h2>+1 512-550-1519</h2>
                        </div>
                    </div>
                    <div className='col mt-5'>
                        <h1>Send us a message</h1>

                        <form onSubmit={handleSubmit}>
                            <div className="row">

                                <div className="col-sm-5">
                                    <label className="">First Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={firstName}
                                        onChange={(event) => setFirstName(event.target.value)}
                                        required
                                    />
                                </div>

                                <div className="col-sm-5">
                                    <label className="">Last Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={lastName}
                                        onChange={(event) => setLastName(event.target.value)}
                                        required
                                    />
                                </div>

                            </div>
                            <div className="row">

                                <div className="col-sm-10">
                                    <label className="">Email Address</label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-sm-10">
                                    <label className="">Subject</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={subject}
                                        onChange={(event) => setSubject(event.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-sm-10">
                                    <label className="">Your Message</label>
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        value={message}
                                        onChange={(event) => setMessage(event.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary mt-2  ">
                                Send Message
                            </button>
                        </form>
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

export default Contact;


import React from 'react';
import { useState } from 'react';
import { useRegister } from '../../hooks/Auth/useRegister';
import { Link } from 'react-router-dom';
import './auth.css';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const {register, registerError} = useRegister();

    const handleRegister = async (e) => {
        e.preventDefault();
        await register(name, email, mobile, password);
    };


    return (
        <div className="parent-container">
            <div className="auth-container">
                <h1>Register</h1>
                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile No.</label>
                        <input type="text" id="mobile" name="mobile" placeholder="Your Mobile No." required maxLength={10} 
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Enter Password</label>
                        <input type="password" id="password" name="password" placeholder="Password" required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {registerError && <p className='text-[#E72929] mt-[-13px] text-[0.9rem]'>{registerError}</p>}
                    <button type="submit" className="submit-button" onClick={handleRegister}>Register</button>
                </form>
                <p className="auth-footer">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;

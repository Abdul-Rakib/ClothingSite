import React from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const ForgetPassword = () => {
    return (
        <div className="parent-container">
            <div className="auth-container">
                <h1>Forgot Password</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>
                    <button type="submit" className="submit-button">Send Reset Link</button>
                </form>
                <p className="auth-footer">
                    Remembered your password? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default ForgetPassword;

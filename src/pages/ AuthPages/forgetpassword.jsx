import React from 'react';
import './auth.css';

const ForgetPassword = () => {
    return (
        <div className="parent-container">
            <div className="auth-container">
                <h1>Forget Password</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>
                    <button type="submit" className="submit-button">Send Reset Link</button>
                </form>
                <p className="auth-footer">
                    Remembered your password? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    );
};

export default ForgetPassword;

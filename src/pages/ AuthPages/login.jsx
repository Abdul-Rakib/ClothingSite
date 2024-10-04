import React from 'react';
import './auth.css';

const Login = () => {
    return (
        <div className="parent-container">
            <div className="auth-container">
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Your Password" required />
                    </div>
                    <button type="submit" className="submit-button">Login</button>
                </form>
                <p className="auth-footer">
                    Don't have an account? <a href="/register">Register</a>
                </p>
                <p className="auth-footer">
                    <a href="/forget-password">Forget Password?</a>
                </p>
            </div>
        </div>
    );
};

export default Login;

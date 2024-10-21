import React from 'react';
import { useState } from 'react';
import { useLogin } from '../../hooks/Auth/useLogin';
import { Link } from 'react-router-dom';
import './auth.css';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const {login, loginError} = useLogin();

    const handleLogin = async (e) => {
        e.preventDefault(); // Ensure the form is not submitted via the URL (default GET behavior)
        await login(email, password);
    }

    return (
        <div className="parent-container">
            <div className="auth-container">
                <h1>Login</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Your Password" required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {loginError && <p className='text-[#E72929] mt-[-13px] text-[0.9rem]'>{loginError}</p>}
                    <button type="submit" className="submit-button" onClick={handleLogin}>Login</button>
                </form>
                <p className="auth-footer">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
                <p className="auth-footer">
                    <Link to="/forget-password">Forgot Password</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;

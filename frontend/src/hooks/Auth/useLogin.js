import { useVariableContext } from "../../context/VariableContext";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export const useLogin = () => {
    const {host} = useVariableContext();
    const [loginError, setLoginError] = useState(null);
    const navigate = useNavigate();

    const login = async(email, password) => {
        try {
            const response = await fetch(`${host}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password}),
            });
            const data = await response.json();
            console.log(data);
            
            if (!response.ok) {
                setLoginError(data.message);
                return;
            }
            setLoginError(null);
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/");
        }
        catch (error) {
            setLoginError(error.message);
            console.log(error);
            
        }
    }
    return {login, loginError};
}
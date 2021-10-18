import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }
    return (
        <div>
            <h2>Please Login</h2>
            <Button onClick={handleGoogleLogin} variant="primary mb-2">Google Sign IN</Button>
        </div>
    );
};

export default Login;
import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <Button onClick={signInUsingGoogle} variant="primary mb-2">Google Sign IN</Button>
            {/* <button onClick={signInUsingGoogle} className="btn btn-primary">Google Sign In</button>
            <button onClick={signinUsingGoogle} className='btn btn-primary'>Google Sign In</button> */}
        </div>
    );
};

export default Login;
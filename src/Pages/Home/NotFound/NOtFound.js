import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from './../../../images/404.png'

const NOtFound = () => {
    return (
        <div>
            <img style={{ height: '600px', width: '900px', }} src={notfound} alt="" />
            <br />
            <Link to="/"><Button variant="primary mb-2">Go Back</Button></Link>
        </div>
    );
};

export default NOtFound;
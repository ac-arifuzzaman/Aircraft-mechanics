import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css"

// const Service = (props) => {
//     const { name } = props.service;
const Service = ({ service }) => {
    const { id, name, description, price, img } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h5>Price:{price}</h5>
            <p className="px-5">{description}</p>
            {/* dynamic router button */}
            <Link to={`/Booking/${id}`}>
                <Button variant="primary mb-2">Book {name.toLowerCase()}</Button>
            </Link>
        </div>
    );
};

export default Service;
import React from 'react';
import "./Service.css"

// const Service = (props) => {
//     const { name } = props.service;
const Service = ({ service }) => {
    const { name, description, price, img } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h5>Price:{price}</h5>
            <p className="px-5">{description}</p>
        </div>
    );
};

export default Service;
import React from 'react';

const Expert = ({ expert }) => {
    const { name, experts, img } = expert;
    return (
        <div className="col-12 col-md-6 col-sm-6 col-lg-3">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h5>{experts}</h5>
        </div>
    );
};

export default Expert;
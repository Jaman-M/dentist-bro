import React from 'react';

const Service = ({service}) => {
    const {name, img, description, prices} = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>price: ${prices}</p>
            <p><small>{description}</small></p>
            <button>Detail info: {name}</button>
        </div>
    );
};

export default Service;
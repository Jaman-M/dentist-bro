import React from 'react';

const Price = ({price}) => {
    const {name,img} = price;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>

<div className="card " style={{width: "18rem"}}>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">
      <li>$450 for 3 timess</li>
      <li>$300 for 2 timess</li>
      <li>$100 only one time</li>
    </p>
    <a href="#" className="btn btn-info">Go somewhere</a>
  </div>
</div>
        </div>
        
    );
};

export default Price;
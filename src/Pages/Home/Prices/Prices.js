import React from 'react';

import price1 from '../../../images/prices/image1 (1).jpg';
import price2 from '../../../images/prices/image1 (2).jpg';
import price3 from '../../../images/prices/image1 (3).jpg';
import price4 from '../../../images/prices/image1 (4).jpg';
import Price from '../Price/Price';

const prices = [
    {id: 1, name: 'Dental Whiting', img: price1},
    {id: 2, name: 'Root Treatment', img: price2},
    {id: 3, name: 'Dental Implant', img: price3},
    {id: 4, name: 'Dental Whiting-2', img: price4},
]

const Prices = () => {
    return (
        <div className='container mt-5'>
            <h2 className='text-info text-center'>Pricing</h2>
            <div className='row mt-5'>
                {
                    prices.map(price => <Price
                        key={price.id}
                        price={price}
                    ></Price>)
                }
            </div>
        </div>
    );
};

export default Prices;
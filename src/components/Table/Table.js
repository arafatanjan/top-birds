import React, { useEffect, useState } from 'react';
import Bird from '../Bird/Bird';

import './Table.css'


const Table = () => {
    const [birds, setBirds] = useState([]);
    useEffect(() => {
        fetch('product.JSON')
            .then(res => res.json())
            .then(data => setBirds(data));

    }, [])
    return (
        <div className="table-container">
            <div className='bird-container'>
                <h1>This : {birds.length}</h1>
                {
                    birds.map(bird => <Bird bird={bird}></Bird>)
                }
            </div>
            <div className='cart-container'>
                <h5>Bird Added</h5>
                <h5>Total Cost</h5>
            </div>

        </div>
    );
};

export default Table;
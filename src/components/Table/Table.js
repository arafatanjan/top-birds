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

    const handleAddToCart = (bird) => {
        console.log(bird.name);
    }
    return (
        <div className="table-container">
            <div className='bird-container'>
                {/* <h1>This : {birds.length}</h1> */}
                <div className='bird-card'>
                    {
                        birds && birds.map(bird => <Bird
                            key={bird.key}
                            bird={bird}
                            handleAddToCart={handleAddToCart}></Bird>)
                    }
                </div>

            </div>
            <div className='cart-container'>
                <h5>Bird Added</h5>
                <h5>Total Cost</h5>
            </div>

        </div>
    );
};

export default Table;
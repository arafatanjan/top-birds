import React, { useEffect, useState } from 'react';
import Bird from '../Bird/Bird';
import Cart from '../Cart/Cart';

import './Table.css'


const Table = () => {
    const [birds, setBirds] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('product.JSON')
            .then(res => res.json())
            .then(data => setBirds(data));

    }, [])

    const handleAddToCart = (bird) => {
        const newCart = [...cart, bird];
        setCart(newCart);
        // console.log(cart);
    }
    console.log(cart)
    return (
        <div className="table-container">
            <div className='bird-container'>
                {/* <h1>This : {birds.length}</h1> */}
                <div className='bird-card'>
                    {
                        birds.map(bird => <Bird
                            key={bird.key}
                            bird={bird}
                            handleAddToCart={handleAddToCart}></Bird>)
                    }
                </div>

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Table;
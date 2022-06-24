import React, { useEffect, useState } from 'react';
import './Table.css'

const Table = () => {
    const [birds, setBirds] = useState([]);
    useEffect(() => {
        fetch('../../../public/product.JSON')
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])
    return (
        <div className="table-container">
            <div className='bird-container'>
                <h1>This is shop</h1>
            </div>
            <div className='cart-container'>
                <h5>Bird Added</h5>
                <h5>Total Cost</h5>
            </div>

        </div>
    );
};

export default Table;
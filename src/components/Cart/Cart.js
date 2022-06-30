import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h5>Bird Added: {props.cart?.length}</h5>
            <h5>Total Cost</h5>
        </div>
    );
};

export default Cart;
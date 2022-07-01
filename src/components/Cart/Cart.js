import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    if (cart?.length > 0) {
        for (const bird of cart) {
            total = total + bird.price;
        }
    }


    // console.log(typeof (cart))
    return (
        <div>
            <h5>Bird Added: {props.cart?.length}</h5>
            <h5>Total Cost:{total}</h5>
            <h5>gg{props.bird?.name}</h5>
        </div>
    );
};

export default Cart;
import React from 'react';
import './cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    if (cart?.length > 0) {
        for (const bird of cart) {
            total = total + bird.price;
        }
    }


    // console.log(cart)
    return (
        <div className='cart'>
            <h5>Bird Added: {props.cart?.length}</h5>
            <h5>Total Cost:{total}</h5>
            <ul>
                {
                    cart?.map(pd => <li >{pd.name}</li>)
                }
            </ul>
        </div >
    );
};

export default Cart;
import React from 'react';
import './Bird.css';

const Bird = (props) => {
    // console.log(props.bird);
    // const { name, color, country, price, img } = props.bird;

    return (
        <div className='country'>
            {/* <h4>this {props.bird.color}</h4> */}
            <img src='img' />
            <h4>{props.bird?.name}</h4>
            <h4>{props.bird?.color}</h4>
            <h4>{props.bird?.country}</h4>
            <h4>{props.bird?.price}</h4>
            <button onClick={() => props.handleAddToCart(props.bird)}
                className='btn-regular'>add to cart</button>

        </div>
    );
};

export default Bird;

// console.log(props.bird.color);
    // const { name, color, country, price, img } = props.bird || {};
    // const { name } = undefined || {};
    // console.log(props.bird.name);
    // const { name } = props.bird.name || {};
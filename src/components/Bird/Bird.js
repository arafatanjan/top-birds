import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Bird.css';

const Bird = (props) => {
    // console.log(props.bird);
    // const { name, color, country, price, img } = props?.bird;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='country'>
            {/* <h4>this {props.bird.color}</h4> */}
            <img src={props.bird?.img} />
            <div className='s'>
                <h4>Name:{props.bird?.name}</h4>
                <h4>Color:{props.bird?.color}</h4>
                <h4>Origin:{props.bird?.country}</h4>
                <h4>Price:{props.bird?.price}</h4>
                <button onClick={() => props.handleAddToCart(props.bird)}
                    className='btn-regular'>{element}add to cart</button>

            </div>
        </div>
    );
};

export default Bird;

// console.log(props.bird.color);
    // const { name, color, country, price, img } = props.bird || {};
    // const { name } = undefined || {};
    // console.log(props.bird.name);
    // const { name } = props.bird.name || {};
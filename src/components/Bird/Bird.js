import React from 'react';
import './Bird.css';

const Bird = (props) => {
    console.log(props.bird);
    // const { name, color, country, price, img } = props.bird;
    return (
        <div>
            <h4>this {props.bird.color}</h4>

        </div>
    );
};

export default Bird;
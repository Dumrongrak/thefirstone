import React from "react";

const Card = ({name,type,rating,address,image,info}) => {
    return (
        <dev>
            <h1>{name}</h1>
            <img src={image} height="400" width="600" ></img>
            <h2>Type:{type}</h2>
            <h2>Location: {address}</h2>
            <h2>Rating: {rating} / 5</h2>
            <text>{info}</text>
        </dev>
    );
};
export default Card;
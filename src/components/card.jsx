import React from "react";
import { GrLocationPin } from "react-icons/gr";


const Card = ({name,type,rating,address,image,info}) => {
    return (
        <div className="card-box">
            <h2>{name}</h2>
            <img src={image} alt={name} className="card-img"></img>
            <p className="card-type">Type: {type}</p>
            <p className="card-address"><GrLocationPin/> {address}</p>
            <p className="card-rating">Rating: {rating} / 5</p>
            <p className="card-info">{info}</p>
        </div>
    );
};
export default Card;
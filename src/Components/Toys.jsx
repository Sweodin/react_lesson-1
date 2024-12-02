import { useState } from 'react'

function Toys({ img, title, text, info, price }) {
    return (
        <div className="card">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{text}</p>
            <p className="info">{info}</p>
            <p className="price">${price}</p>
            <button className="buy-button">Buy Now!</button>
        </div>  
    );
}

export default Toys;

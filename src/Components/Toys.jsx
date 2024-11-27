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

/* Create a navigation bar with a few pages in your React project. There needs to be atleast 3 pages.  

Create a footer aswell 

On one of your pages, add a counter. You wanna display 3 buttons, one for increment, one for decrement, and one for reset.
 You also want to add a number to your page. These buttons should change the number dynamically inside you page. 

This is a very basic assignment, but it does introduce some new concepts that we need to be aware of.
 Make sure to use those for this assignment.  */
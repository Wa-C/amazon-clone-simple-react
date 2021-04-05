import React from 'react';

const Cart = (props) => {
    const cart = props.cart; // didn't understand/
    const totalPrice = cart.reduce((total,prd) => total + prd.price, 0);

    let shipping = 0;
    if (totalPrice > 35){
        shipping = 0;
    }
    else if (totalPrice > 15){
        shipping = 4.99;
    }
    else if (totalPrice > 0){
        shipping = 12.99
    }
    const Tax = (totalPrice / 10).toFixed(2);
    const grandTotal = totalPrice + shipping + Number(Tax).toFixed(2);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length}</p> 
            <p>Product Price:{formatNumber(totalPrice)} </p>
            <p>Shipping Cost: {shipping} </p>
            <p>Tax + VAT :{Tax} </p>
            <p>Total Price:{grandTotal} </p>
        </div>
    );
};

export default Cart;
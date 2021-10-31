import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const { cart } = props;
    
    let totalQuantity = 0;
    let total = 0;

    for (const course of cart) {
        if (!course.quantity) {
            course.quantity = 1;
        }
        total = total + course.fee * course.quantity;
        totalQuantity = totalQuantity + course.quantity;
    }

    return (
        <div>
            <div class="card card-container" >
                <div class="card-body">
                    <h5 class="card-title">Your Cart</h5>
                    <p class="card-text">No of Added Course: {totalQuantity}</p>
                    <p class="card-text">Total Investment: {total}</p>
                    {
                        cart.map(cart => <p>Course Name: {cart.title}</p>)
                    }
                    <a href="/" class="btn btn-success">Book Now</a>
                </div>
            </div>
        </div>
    );
};

export default Cart;
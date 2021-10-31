import React from 'react';
import './Content.css';

const Content = (props) => {
    const { title, instructor, img, fee, language, category } = props.course;
    return (

        <div className="card-conatiner">
            <div class="card h-100">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">by {instructor}</p>
                    <p class="card-text">Category: {category}</p>
                    <p class="card-text">Language: {language}</p>
                    <p class="card-text">BDT {fee}</p>
                    <p class="card-text">Unlock Trail Version: <a href="/trail">
                        <i class="fas fa-lock-open"></i></a> </p>
                    <br />
                    <button className=" cart-btn" onClick={() => props.handleAddToCart(props.course)} > <i class="fas fa-shopping-cart"></i> Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Content;
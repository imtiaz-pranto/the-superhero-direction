import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Content from '../Content/Content';
import './Course.css';

const Course = () => {
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    const handleAddToCart = course => {
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        <div className="course-conatainer p-4">
            <div className="content-container">
                {
                    courses.map(course => <Content
                        key={course.id}
                        course={course}
                        handleAddToCart={handleAddToCart}
                    ></Content>)
                }
            </div>
            <div className="cart-container">
                
                     <Cart cart={cart}></Cart>
                     
                
            </div>

        </div>
    );
};

export default Course;
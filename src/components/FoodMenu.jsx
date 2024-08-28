import React from 'react';

const FoodMenu = (p) => {
    const {img, name, category,price} = p
    return (
        <div class = 'foodlist'>
            <img src= {img} class = "img1"/>
            <p class = 'p1'>{name}</p>            
            <p class = 'p1'>{category}</p>            
            <p class = 'p1'>{price}</p>            
        </div>
    );
};

export default FoodMenu;
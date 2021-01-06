import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ name, price, imageUrl }) => (
    <div className="collection-item">
        <div
            className='background-image'
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <button className="button">ADD TO CART</button>

        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div> 
    </div>
)

export default CollectionItem;
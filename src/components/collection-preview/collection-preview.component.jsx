import React from 'react';

import CollectionItem from '../collection-item/collection-item.component'

import './collection-preview.component.scss';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item, index) => index < 4)
                    .map(({id, ...otherCollectionItemProps}) => (
                        // <div key={id} {...otherCollectionItemProps}>{name}</div>
                        <CollectionItem key={id} {...otherCollectionItemProps}/>
                    ))}
            </div>
        </div>
    )
}

export default CollectionPreview;
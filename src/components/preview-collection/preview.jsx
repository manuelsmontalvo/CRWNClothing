import React from "react";
import CollectionItem from '../collection-item/collectionItem';

import "./preview.scss";

const Preview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, index) => index < 4)
        .map(({id, ...itemProps}) => (
          <CollectionItem key={id} {...itemProps}/>
        ))}
    </div>
  </div>
);

export default Preview;

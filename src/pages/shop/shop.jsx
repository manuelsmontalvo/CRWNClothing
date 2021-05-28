import React, { Component } from 'react'
import Preview  from '../../components/preview-collection/preview';

import SHOP_DATA from './shopData'

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
      
    }
  }
  render() {
    const {collections} = this.state
    return (
      <div className="shop-page">
        {collections.map(({id, ...collectionProps}) => (
          <Preview key={id} {...collectionProps} />
        ))}
      </div>
    )
  }
}

export default ShopPage
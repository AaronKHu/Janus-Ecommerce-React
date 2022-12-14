import React from 'react'
import './Collection.css';

import discoverWatches from '../../assets/images/discover-watches.jpg'
import discoverRings from '../../assets/images/discover-rings.jpg'
import discoverNecklaces from '../../assets/images/discover-necklaces.jpg'

const Collection = () => {
  return (
    <div className='collection'>
        <div className='collection-content'>
            <h1>Artisan Hand-Crafted Watches</h1>
            <h3>Impressive and stylish watches are passionately created with every detail elaborately designed and executed by our special craftsmanship. Designed and brought to you from London, England.</h3>
        </div>
        <div className='grid'>
            <div className='shop-watches zoom-in'>
                <figure>
                    <img src={discoverWatches} alt='' />
                    <button type='submit' className='shop-watches-btn'>SHOP WATCHES</button>
                </figure>
            </div>
            <div className='shop-rings zoom-in'>
                <figure>
                    <img src={discoverRings} alt='' />
                    <button type='submit' className='shop-rings-btn'>SHOP RINGS</button>
                </figure>
            </div>
            <div className='shop-necklaces zoom-in'>
                <figure>
                    <img src={discoverNecklaces} alt='' />
                    <button type='submit' className='shop-necklaces-btn'>SHOP NECKLACES</button>
                </figure>
            </div>
        </div>
    </div>
  )
}

export default Collection
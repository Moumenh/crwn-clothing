import React from 'react'
import { connect } from 'react-redux'

import CollectionPreview from '../preview-collection.component/preview-collection.component';

import { selectShopCollections } from '../../redux/shop/shop.selectors'

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map((shopdata, index) =>
            (<CollectionPreview key={index} shopdata={shopdata} />)
        )}
    </div>
)
const mapStateToProps = (state) => ({
    collections: selectShopCollections(state),
})


export default connect(mapStateToProps)(CollectionOverview);
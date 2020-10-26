import React from "react";
import Preview from '../../components/preview/preview.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { SelectCollectionForPreview } from '../../redux/shop/shop.selectors';
import './collection-preview.styles.scss';


const CollectionPreview = ({shop}) => (
 <div className='collection-preview'>
  <div className='shopPage'>

   {shop
    .map(({ id, ...otherCollection }) => (
     <Preview key={id} {...otherCollection} />
    ))}

  </div>
 </div>
)


const mapStateToProps = createStructuredSelector({
 shop: SelectCollectionForPreview
})




export default connect(mapStateToProps)(CollectionPreview);
import React from "react";
import {Route} from 'react-router-dom';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import CollectionPage from '../collection/collection.component';



const ShopPage = ({match})=> {
 
  return( 
  <div className = 'shopPage'>
   
  <Route exact path = {`${match.path}`} component = {CollectionPreview} />
  <Route exact path = {`${match.path}/:collectionId`} component = {CollectionPage}/>
  
  </div>
  )
 }


export default ShopPage;
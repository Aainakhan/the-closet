import React from "react";
import Shop_Data from './shop.data';
import Preview from '../../components/preview/preview.component';

class ShopPage extends React.Component
{
 constructor() {
  super();

  this.state =
  {
   collections: Shop_Data
  }
 }


 render(){

  const {collections} = this.state;
  return <div className = 'shopPage'>
   
  { collections
  .map(({id, ...otherCollection }) => (
   <Preview  key = {id} {...otherCollection} />
   )) }
  
  </div>
 }
}



export default ShopPage;
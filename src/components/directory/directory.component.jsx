/* eslint-disable */

import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss';

const Directory = ({sections}) =>  {
 
 console.log(sections);
 
  return (
   <div className='directory-menu'>
    { sections.map(({ id , ...sectionProps}) => (
     <MenuItem t key={id} {...sectionProps} />
    
    ))}

   </div>
  )
 

}

const mapStateTOProps = createStructuredSelector({
 sections:selectDirectorySections
})
export default connect(mapStateTOProps)(Directory);
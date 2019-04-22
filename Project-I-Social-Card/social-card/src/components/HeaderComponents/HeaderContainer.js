import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js'; 
import HeaderTitle from './HeaderTitle.js'; 
import HeaderContent from './HeaderContent.js'; 


const HeaderContainer = () => { 
    return( 
        <div>
    <ImageThumbnail /> 
    <HeaderContent />
    </div>
    ); 

}; 

export default HeaderContainer;
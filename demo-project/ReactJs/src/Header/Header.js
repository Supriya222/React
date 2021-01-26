import React from 'react'
import './Header.css';

function Header(){
    return(

        <div className="Nav_bar">
         <img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/guitar-icon-18-256.png" alt="guitar-icon" width="50vw"/>&nbsp;<span>SoundAMP</span>
         <img className="icons" src="https://img.icons8.com/fluent/2x/linkedin.png" alt="linkedIn"/>
         <img className="icons" src="https://img.icons8.com/fluent/2x/twitter.png" alt="twitter" />
         <img className="icons" src="https://img.icons8.com/color/2x/facebook.png" alt="facebook"/>
         <img className="icons" src="https://img.icons8.com/color/2x/youtube-squared.png" alt="youtube"/>
         <span className="Nav_content">More<i className="fa fa-caret-down"></i> </span>
         <span className="Nav_content">Design<i className="fa fa-caret-down"></i> </span>
       </div>        
        );
}
export default Header;
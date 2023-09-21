import React from 'react';
import imgMcAffee from '../../src/assets/frame-1484578055.png';
import imgNorton from '../../src/assets/norton-antivirus-logo 1.png';
import imgClarifion from '../../src/assets/Clarifion_Logo 1.png';
import imgCheckark from '../../src/assets/fluent_checkmark-starburst-20-regular.png';
import './Navbar.css'

function Navbar() {
  return (
        <div className="navbar">
          <div className="navbar-head">
            <button type="button">&lt;</button>
              <img src={imgCheckark} alt="Checkmark_image"></img>
            <p>30-DAY SATISFACTION GUARANTEE</p>
            <button type="button">&gt;</button>
          </div>
          <div className="navbar-head-logos">
            <div className="navbar-head-logos-left">
              <img src={imgClarifion} alt="logo_Clarifion"></img>
            </div>
            <div className="navbar-head-logos-right">
              <img src={imgMcAffee} alt="logo_McAffee"></img>
              <img src={imgNorton} alt="logo_Norton"></img>
            </div>
            
          </div>
        </div>
      
  );
}

export default Navbar;
import React from 'react';
import './SocialMediaLinks.css';

import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const SocialMediaLinks = () => {
  return (
    <div className="social-media">
      <a href="#"><CiTwitter /></a>
      <a href="#"><SlSocialFacebook /></a>
      <a href="#"><FaInstagram /></a>
      <a href="#"><CiYoutube /></a>
      
    </div>
  );
};

export default SocialMediaLinks;

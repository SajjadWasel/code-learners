import React from 'react';
import './SocialIcons.css';
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs'

const SocialIcons = () => {

    return (
        <div className='social-icons'>
            <div onClick={() => window.location.href = 'https://www.facebook.com'} className="icon wrap text-primary m-2">
                <FaFacebook></FaFacebook>
            </div>
            <div onClick={() => window.location.href = 'https://www.youtube.com'} className="icon wrap text-danger m-2">
                <FaYoutube></FaYoutube>
            </div>
            <div onClick={() => window.location.href = 'https://www.github.com'} className="icon wrap text-dark m-2">
                <FaGithub></FaGithub>
            </div>
            <div onClick={() => window.location.href = 'https://www.discord.com'} className="icon wrap m-2">
                <BsDiscord></BsDiscord>
            </div>
            <div onClick={() => window.location.href = 'https://www.linkedin.com'} className="icon wrap text-info m-2">
                <FaLinkedin></FaLinkedin>
            </div>

        </div>
    );
};

export default SocialIcons;
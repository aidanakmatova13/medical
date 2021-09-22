import React from 'react';
import avatar from "../Layout/img/photo-1506794778202-cad84cf45f1d.jpg";

const Header = () => {
    return (
        <header className='header'>
            <img src={avatar} className='avatar' alt=""/>
        </header>
    );
};

export default Header;
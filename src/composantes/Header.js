import React from 'react';
import photo from '../media/zouzou.JPG';


const Header = () => {
    return (
        
        <header className="App-header">
            <img src={photo} width="45px" height="45px" alt="sary1"/>
            <p>Mon blog du jour</p>
        </header>
        
    );
};

export default Header;
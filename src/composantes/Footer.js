import React from 'react';


const Footer = () => {
    return (
        <div className="footer_be">
            <div className="footer">
                
                <div className="footer_ 1">
                    <h2>A propos</h2>
                    <a href="#">Blog</a>
                    <a href="#">Demo</a>
                    <a href="#">terme du service</a>
                </div>
                
                <div className="footer_ 2">
                    <h2>Contact</h2>
                    <a href="#">Telephone</a>
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">Email</a>
                </div>
            
                <div className="footerMail">
                    <h2>Envoyer mail</h2>
                    <input type="email"  placeholder="entrer votre mail" id="inputMail"/>
                    <input type="submit" value="Se connécté" id="footerMailBouton"/>
                    
                </div>

                
            
            </div>
        </div>    
    );
};

export default Footer;
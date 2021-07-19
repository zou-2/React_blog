import React from 'react';
import photo1 from '../media/abdo.JPG';
import photo2 from '../media/matin.jpg';

const Body = () => {
    return (
        <>
        <div className="div_body">
            <h4>le 19 juillet 2021</h4>

            <div className="div_body1">
                <img src={photo2} width="945px" height="445px" alt="saryCont3"/>
                <p> Rien de mieux qu'
                    une bonne musique pour demarrer une belle et pleine journée.
                    Sur ma guitar comme sur le clavier mes doigts ne se lassent 
                    jamais<br/>
                    de joué. Quelques bonnes notes ou quelques bonnes codes,
                    c'est ma passion. Et c'est ainsi que je fini ma journée.
                </p>
            </div>

            <div className="div_body2">
                <h3>A propos de moi</h3>
                <img src={photo1} width="320px" height="345px" alt="saryCont1"/>
                <p>Edrick fibber's, photographe, designer, graphiste<br/> 
                   et apprenti informaticien au sein de l'institut <br/>
                   superieur polytechnique de madagascar.
                </p>
                <h3>Loisirs:</h3>
                <ul>
                <li>Musiques</li>
                <li>Danses</li>
                <li>Sports</li>
                </ul>
            </div>

            
            
        </div>    
        </>
    );
};

export default Body;
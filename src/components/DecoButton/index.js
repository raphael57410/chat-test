import React, { useEffect } from 'react';

const ButtonDeco = ({setIsLogged}) => {
        const logOut = () => {
            setIsLogged(false);
            console.log('je passe');
            localStorage.clear();
    };
   
    return (
    <button className="chatpage--deconnexion-button" onClick={logOut}>deco</button>
    );

};
export default ButtonDeco;
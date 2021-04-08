// == Import npm
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FbConnect } from 'src/components/Firebase';

// == Import SCSS
import './connectionPage.scss';


// == Composant
const ConnectionPage = ( { isLogged, loader } ) => {

    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
    loader(true);
    FbConnect(data.email,data.password,isLogged,loader);

    };

return(
    <div className="connection--page">
        <h1 className="connection--page-title">voici la page de connexion</h1>
    <form className="connection--page-form" onSubmit={handleSubmit(onSubmit)}>

        <label className="connection--page-label">
            email :
            <input className="connection--page-input" type="email" name="email" {...register('email')} />
        </label>

        <label className="connection--page-label">
            Prénom :
            <input className="connection--page-input" type="text" name="firstname"  {...register('firstname')} />
        </label>

        <label className="connection--page-label">
            Mot de passe :
            <input className="connection--page-input" type="password" name="password" {...register('password')} />
        </label>
        <div className="connection--page-submitContainer">
            <input className="connection--page-submit" type="submit" value="envoyer" />
        </div>
        
    </form>
    </div>
  
)}


// == Export
export default ConnectionPage;

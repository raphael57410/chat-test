// == Import npm
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { DBconnect, DBaddUser } from 'src/components/Request';

// == Import SCSS
import './connectionPage.scss';


// == Composant
const ConnectionPage = ( {loader, message,isLogged,setMessage,setCookie } ) => {

    const {register, handleSubmit} = useForm();
    const [addUser, setAddUser] = useState(false);

    /**
    *   function on submit 
    * @param {string} data
    */
    const onSubmit = (data) => {
        loader(true);
        DBconnect(data.email,data.password,loader,isLogged,setMessage,setCookie);
    };

    /**
     * @param  {string} data
     */
    const addNewUser = (data) => {
        loader(true);
        DBaddUser(data.email,data.password,loader);
    };

return(
    <div className="connection--page">
        <h1 className="connection--page-title">{addUser ? 'Inscription' : 'connexion'}</h1>
    <form className="connection--page-form" onSubmit={!addUser ? handleSubmit(onSubmit) : handleSubmit(addNewUser)}>

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
            <div className="connection--page-message">{message}</div>
        <div className="connection--page-submitContainer">
            <input className="connection--page-submit" type="submit" value="envoyer" />
            {!addUser && <input className="connection--page-submit" type="button" value="vous etes pas inscits?" onClick={()=>setAddUser(true)} />}
            {addUser && <input className="connection--page-submit" type="button" value="retour" onClick={()=>setAddUser(false)} />}
        </div>
        
    </form>
    </div>
  
)}


// == Export
export default ConnectionPage;

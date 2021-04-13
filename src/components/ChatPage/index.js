// == Import npm
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';


// == Import SCSS
import './chatpage.scss';


// == Composant
const ChatPage = ({userId}) => {
    const [message, setMessage] = useState([]);
    const {register, handleSubmit} = useForm();
    
    useEffect(() => {
    },[]);//TODO:a voir le []

    //ajouter un message via l'id de l'utilisateur
    const sendNewMessage = (newMessage) => {
        const messageObjevt = {
            message: newMessage.message,
            userId,
        }
    }
return(
<div className="chatpage--container">
    <h1>coucou ici la page chat</h1>
    {message.length > 0 &&
        message.map((message, i) => 
         <div key={i} className="chatpage--message">{message.message}</div>
        )
    }
    <form className="chatpage--input-container" onSubmit={handleSubmit(sendNewMessage)} >
        <input className="chatpage--input" type="text" name="message" {...register('message')} />
        <input className="chatpage--button" type="submit" value="envoyer" />
    </form>
</div>
  
)}


// == Export
export default ChatPage;

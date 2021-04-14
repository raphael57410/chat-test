// == Import npm
import React, { useEffect, useRef, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { fetchAllMessages, DBAddNewMessage } from 'src/components/Request';


// == Import SCSS
import './chatpage.scss';


// == Composant
const ChatPage = ({userId}) => {
    const [messages, setMessages] = useState([]);
    const {register, handleSubmit} = useForm();
    const [dataFecth, setDataFecth] = useState(false);
    const lastDivMessageRef = useRef(null);
    const TOKEN = localStorage.getItem('TOKEN');

    const scrollToBottom = () => {
        lastDivMessageRef.current?.scrollIntoView({ behavior: "smooth" })
      }

    useEffect(() => {
        if (localStorage.getItem('TOKEN') !== null && dataFecth === false) {
            fetchAllMessages(TOKEN,setMessages);
            setDataFecth(true);
            console.log('je passe par la'); 
        }
        scrollToBottom()
    },[messages,dataFecth]);


    //ajouter un message via l'id de l'utilisateur
    const sendNewMessage = (newMessage) => {
        const messageObject = {
            content: newMessage.message,
            author_id:userId,
        }
        DBAddNewMessage(messageObject, TOKEN)
    }
return(
<div className="chatpage--container">
    <h1>coucou ici la page chat</h1>
    {messages.length > 0 &&
    
        messages.map((message, i) => 
        
         <div key={i} className="chatpage--message">{message.content}</div>
        )
    }
    <div ref={lastDivMessageRef} className="chatpage--lastRef" />
    <form className="chatpage--input-container" onSubmit={handleSubmit(sendNewMessage)} >
        <input className="chatpage--input" type="text" name="message" {...register('message')} />
        <input className="chatpage--button" type="submit" value="envoyer" onClick={() => setDataFecth(false)}/>
    </form>
</div>
  
)}


// == Export
export default ChatPage;

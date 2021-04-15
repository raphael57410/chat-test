// == Import npm
import React, { useEffect, useRef, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { fetchAllMessages, DBAddNewMessage } from 'src/components/Request';
import ButtonDeco from 'src/components/DecoButton';


// == Import SCSS
import './chatpage.scss';


// == Composant
const ChatPage = ({userId,cookies,setIsLogged}) => {
    const [messages, setMessages] = useState([]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [dataFecth, setDataFecth] = useState(false);
    
    const lastDivMessageRef = useRef(null);
    const TOKEN = cookies.TOKEN;

    const scrollToBottom = () => {
        lastDivMessageRef.current.scrollIntoView({ behavior: "smooth" })
      }

    useEffect(() => {
        if (cookies.TOKEN !== null && dataFecth === false) {
            fetchAllMessages(TOKEN,setMessages,);
            setDataFecth(true);
            console.log('je passe par le fetchMessage'); 
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
    <h1 className="chatpage--title-container">Bienvenue sur le chat</h1>
    <ButtonDeco setIsLogged={setIsLogged}/>
    <div className="chatpage--chat-container">
        {messages.length > 0 &&
        
            messages.map((message, i) => 
            
            <div key={i} className={message.author_id == userId ? "chatpage--message-user" : "chatpage--message-other"}>{message.content}</div>
            )
        }
        <div ref={lastDivMessageRef} className="chatpage--lastRef" />
        <form className="chatpage--input-container" onSubmit={handleSubmit(sendNewMessage)} >
            <input className={errors.message ? "chatpage--input erros":"chatpage--input"} type="text" {...register('message', { required:true })} autoComplete="off"/>
            <button className="chatpage--button-send" onClick={() => setDataFecth(false)}>Enovoyer</button>
            {errors.message && <span className="chatpage--errosMessage">veuillez entrer un message !</span>}
        </form>
    </div>
</div>
  
)}


// == Export
export default ChatPage;

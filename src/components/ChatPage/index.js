// == Import npm
import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';


// == Import SCSS
import './chatpage.scss';


// == Composant
const ChatPage = ({database}) => {
    const [message, setMessage] = useState([]);
    const messageRef = database().collection('message').doc('QKSFnp0oLtSFzsx3IRRQ');
    let allMessage = []
    /*
    database().collection('message').add({
        message: 'coucou',
    }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });*/
    
    useEffect(() => {
        database().collection("message").get().then((querySnapshot) => {
            
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            allMessage.push(doc.data())
        });
        setMessage(allMessage);
    });
      },[]);
      
return(
<div className="chatpage--container">
    <h1>coucou ici la page chat</h1>
    {message.length > 0 &&
        message.map((message, i) => 
         <div key={i} className="chatpage--message">{message.message}</div>
        )
    }
</div>
  
)}


// == Export
export default ChatPage;

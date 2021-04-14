import axios from 'axios';

const API_URL_LOGIN = 'http://localhost:3000/login';
const API_URL_ADD_USER = 'http://localhost:3000/addUser';
const API_URL_FETCH_ALL_MESSAGES = 'http://localhost:3000/messages';
const API_URL_ADD_NEW_MESSAGE = 'http://localhost:3000/addMessage';

/**
 * @param  {string} email
 * @param  {string} password
 * @param  {func} loader
 */
export const DBconnect = (email,password,loader,isLogged,setMessage) => {
    axios.post(API_URL_LOGIN,{
        email,
        password,
    })
    .then((reponse)=>{
        console.log(reponse.status);
        console.log('front reponse BONJOUR :' + reponse.data.email);
        if (reponse.status === 200) {
            loader(false);
            localStorage.setItem('TOKEN', reponse.data.TOKEN);
            isLogged(true);
        }
    })
    .catch((error) =>{
        if (error) {
            setMessage('Les informations entrées sont incorrect!');
        }
    });
};

/**
 * @param  {string} email
 * @param  {string} password
 * @param  {func} loader
 */
export const DBaddUser = (email,password,loader) => {
    axios.post(API_URL_ADD_USER,{
        email,
        password,
    })
    .then((reponse)=>{
        console.log('front reponse:' + reponse.data);
        loader(false);
    })
    .catch((error) =>{
        console.log('front reponse ERREUR:' + error);
    });
};

/**
 * @param  {string} TOKEN
 * @param  {func} setMessage
 *
 */
 export const fetchAllMessages = (TOKEN,setMessage) => {
    axios.get(API_URL_FETCH_ALL_MESSAGES,{ headers: { Authorization: `Bearer ${TOKEN}` } })
    .then((reponse)=>{
        console.log(reponse.data);
        setMessage(reponse.data)
    })
    .catch((error) =>{
        console.log('front reponse ERREUR:' + error);
    });
};


 export const DBAddNewMessage = (newMessage, TOKEN) => {
    axios.post(API_URL_ADD_NEW_MESSAGE,{headers: { Authorization: `Bearer ${TOKEN}` },newMessage})
    .then((reponse)=>{
        console.log(reponse);
    })
    .catch((error) =>{
        console.log('front reponse ERREUR:' + error);
    });
};
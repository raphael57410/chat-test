import axios from 'axios';

const API_URL_LOGIN = 'http://localhost:3000/login';
const API_URL_ADD_USER = 'http://localhost:3000/addUser';

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
            setTimeout(loader(false),5000)
            clearTimeout();
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
        //setTimeout(loader(false),5000);
    });
};
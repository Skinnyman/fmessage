import React, { useEffect, useState } from 'react';
import './App.css';
import { FormControl,Input } from '@mui/material';
import Message from './Message';
import db from './firebase';
import { collection, onSnapshot,serverTimestamp,addDoc,orderBy,query } from 'firebase/firestore';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

function App() {
  const [input,setInput] = useState("");
  const [messages,setMessages] = useState([]);
  const [username,setUsername] = useState('');

  
   useEffect(() =>{
    const messagesRef = collection(db, 'messages');
    const q = query(messagesRef, orderBy('timestamp', 'desc'));
   onSnapshot(q, (snapshot) => {
    setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })));

  });
 },[])
  useEffect(() =>{
   // run codes here
   setUsername(prompt("Please enter your name"))
  },[]) // condition 

  const SendMessage = (event) =>{
    event.preventDefault(); // it prevent the app to load when enter is pressed
    // all the message goes in here
    addDoc(collection(db, 'messages'), {
      message: input,
      username: username,
      timestamp: serverTimestamp()
    })
    
    setInput('');
  }
    
  return (
    <div className="App">
         <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/225px-Facebook_Messenger_logo_2020.svg.png?w=100&h=100' alt='facebook-logo'/>
         <h1>Hello Programmers</h1>
         <h2>Welcome {username}</h2>
         <form className='app_form'>
              <FormControl className='app_FormControl'>
                <Input className='app_input' placeholder='Enter a message' value={input}  onChange={event => setInput(event.target.value)}/>
                 <IconButton className='app_icon' disabled={!input} variant='contained' color='primary' type= "submit" onClick={SendMessage}>
                    <SendIcon/>
                 </IconButton> 
              </FormControl>
        </form>

  
         <FlipMove>

              {
                messages.map(({id,message}) => (
                  
                  <Message key={id} username={username} message={message}/>
                  
                  ))
                }
      </FlipMove>

    </div>
  );
}

export default App;

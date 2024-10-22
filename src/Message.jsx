import React, { forwardRef} from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import './Message.css';

const  Message = forwardRef(({message,username},ref)=> {
  const isUser = username === message.username;
  return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className= {isUser ? "message_usercard" : "message_questcard"}>
            <CardContent>
                <Typography
                 color="black" 
                 variant='h5'  
                 component="h3"
                >  
                   {!isUser && `${message.username}: `}{message.message}
                </Typography>
            </CardContent>
        </Card> 
       
        </div>
     
  )
})

export default Message
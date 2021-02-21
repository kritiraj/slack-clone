import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import {ChatInputContainer} from './style';
import { db } from '../../firebase';
import firebase from 'firebase';
function ChatInput({channelName,channelId}) {
    const [message,setMessage]=useState("")
    const sendMessage=(e)=>{
        e.preventDefault();
        if(channelId){
            console.log(channelId)
            db.collection("rooms").doc(channelId).collection("messages").add({
                message:message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user:'Kriti Raj',
            })
            setMessage("");
        }
    }
    return (
        <ChatInputContainer>
            <form>
                <input value={message} onChange={(e)=>setMessage(e.target.value)} placeholder={`Message #${channelName}`} />
                <Button hidden={true} type="submit" onClick={sendMessage}>
                    Send
                </Button>
                </form>    
  
        
     </ChatInputContainer>
    )
}

export default ChatInput

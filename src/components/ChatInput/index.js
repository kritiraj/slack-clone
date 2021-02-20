import React from 'react'
import { Button } from '@material-ui/core'
import {ChatInputContainer} from './style';

function ChatInput() {
    const sendMessage=(e)=>{
        e.preventDefault();

    }
    return (
        <ChatInputContainer>
            <form>
                <input placeholder={`Message #room}`} />
                <Button hidden type="submit" onClick={sendMessage}>
                    Send
                </Button>
                </form>    
  
        
     </ChatInputContainer>
    )
}

export default ChatInput

import React from 'react'
import {MessageContainer,MessageInfo} from './style';
import {Avatar} from '@material-ui/core'
function Message({message,timestamp,user}) {
    return (
        <MessageContainer>
            <Avatar/>
            <MessageInfo>
                <h4>
                    {user}<span>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message
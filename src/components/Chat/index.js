import {ChatContainer,HeaderLeft,Header,HeaderRight,ChatMessages,ChatBottom} from './style'
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import {useSelector} from 'react-redux';
import ChatInput from '../ChatInput'
import {useDocument} from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';
import Message from '../Message'
import { useRef,useEffect } from 'react';

function Chat() {
    const chatRef=useRef(null)
    const {roomId}=useSelector((state)=>state.roomReducer);
    const [roomDetails]=useDocument(roomId && db.collection("rooms").doc(roomId));
    const [roomMessages]=useDocument(roomId && db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp","asc"));
    useEffect(() => {
        chatRef?.current.scrollIntoView({
            behaviour:'smooth'
        });
    }, [roomMessages,roomId])
    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4>
                        <strong>#{roomDetails?.data().name}</strong>
                    </h4>
                    <StarBorderOutlined />
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlined/>Details
                    </p>
                </HeaderRight>
            </Header>
            <ChatMessages>
                {roomMessages?.docs.map((doc)=>{
                    const {message,timestamp,user}=doc.data();
                    return(
                        <Message key={doc.id}
                        message={message}
                        user={user}
                        timestamp={timestamp} />
                    );
                })}
                <ChatBottom ref={chatRef}/>
            </ChatMessages>
            
            <ChatInput channelId={roomId} channelName={roomDetails?.data().name}/>
        </ChatContainer>
    )
}

export default Chat

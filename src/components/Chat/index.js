import {ChatContainer,HeaderLeft,Header,HeaderRight,ChatMessages} from './style'
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import {useSelector} from 'react-redux';
import ChatInput from '../ChatInput'
function Chat() {
    const roomId=useSelector((state)=>state)
    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4>
                        <strong>#room-name</strong>
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
            </ChatMessages>
            <ChatInput />
        </ChatContainer>
    )
}

export default Chat

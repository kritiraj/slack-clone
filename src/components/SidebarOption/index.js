import React from 'react'
import {SidebarOptionContainer,SidebarOptionChannel} from './style';
import {db} from '../../firebase';
import { useDispatch } from 'react-redux';
import {setRoomId} from '../../redux/actions'

function SidebarOption({Icon,title,addChannelOption,id}){
    const dispatch=useDispatch();
    const addChannel = () =>{
        const channelName= prompt("Please enter the channel Name");
        if(channelName){
            db.collection("rooms").add({
                name:channelName
            })
        }
    }
    const selectChannel =() =>{
        if(id){
            dispatch(setRoomId({roomId:id,}))
        }
    }
    return (
        <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
        { Icon && <Icon fontSize="small" style={{padding:10}} />}
        {Icon ? (
            <h3>{title}</h3>
        ):
        (
            <SidebarOptionChannel>
                    <span>#</span>{title}
            </SidebarOptionChannel>
        )
    }
    </SidebarOptionContainer>
    );
}

export default SidebarOption;

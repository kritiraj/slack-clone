import React from 'react'
import {SidebarContainer,SidebarHeader,SidebarInfo} from './style'
import {FiberManualRecord,Create,InsertComment,Inbox,Drafts,BookmarkBorder,PeopleAlt,Apps,FileCopy,ExpandLess, ExpandMore, Add} from '@material-ui/icons'
import SidebarOption from '../SidebarOption';

function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                <h2>Company</h2>
                <h3>
                    <FiberManualRecord/>
                    Kriti Raj Singhi
                </h3>
                </SidebarInfo>
                <Create/>
            </SidebarHeader>
            <SidebarOption Icon={InsertComment} title="Threads" />
            <SidebarOption Icon={Inbox} title="Mentions & reactions" />
            <SidebarOption Icon={Drafts} title="Saved items" />
            <SidebarOption Icon={BookmarkBorder} title="Channel Browser" />
            <SidebarOption Icon={PeopleAlt} title="People & user groups" />
            <SidebarOption Icon={Apps} title="Apps" />
            <SidebarOption Icon={FileCopy} title="File browser" />
            <SidebarOption Icon={ExpandLess} title="Show less" />
            <hr/>
            <SidebarOption Icon={ExpandMore} title="Channels" />
            <hr/>
            <SidebarOption Icon={Add} addChannelOption title="Add Channel" />
        </SidebarContainer>
    )
}

export default Sidebar

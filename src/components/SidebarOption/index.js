import React from 'react'
import {SidebarOptionContainer,SidebarOptionChannel} from './style';

function SidebarOption({Icon,title,addChannelOption}){
    return (
        <SidebarOptionContainer>
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

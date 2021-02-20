import React from 'react'
import {HeaderContainer,HeaderLeft,HeaderSearch,HeaderRight,HeaderAvatar} from './style'
import {AccessTime,Search,HelpOutline} from "@material-ui/icons"
function Header() {
    return (
        <HeaderContainer>
            {/* Header Left */}
            <HeaderLeft>
                <HeaderAvatar/>
                <AccessTime />
            </HeaderLeft>
            {/* Header Center */}
            <HeaderSearch>
                <Search/>
                <input placeholder="Search.." />
            </HeaderSearch>
            {/* Header Right */}
            <HeaderRight>
                <HelpOutline/>
            </HeaderRight>
        </HeaderContainer>
        )
}

export default Header;

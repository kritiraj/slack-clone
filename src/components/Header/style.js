import styled from "styled-components";
import { Avatar } from "@material-ui/core"

export const HeaderContainer= styled.div`
    display:flex;
    position:fixed;
    width:100%;
    align-items:center;
    justify-content:space-between;
    padding:10px 0;
    background-color: var(--slack-color);
    color:white;
`;

export const HeaderLeft= styled.div`
    flex:0.3;
    display:flex;
    align-items:center;
    margin-left:20px;
    > .MuiSvgIcon-root{
        margin-left:auto;
        margin-right:30px
    }
`;

export const HeaderAvatar= styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity:0.8
    }
`;

export const HeaderSearch= styled.div`
    flex: 0.4;
    border-radius:6px;
    background-color: #421f44;
    text-align:center;
    padding:0 50px;
    display:flex;
    color:gray;
    border: 1px gray solid;
    opacity:1;
    > input{
        text-align:center;
        min-width:30vw;
        border:none;
        background-color:transparent;
        color:white;
        outline:0;
        padding:0;
        font-size:14px;
    }
`;

export const HeaderRight= styled.div`
    display:flex;
    flex:0.3;
    justify-content:flex-end;
    margin-left:0;
    margin-right:30px;
    > .MuiSvgIcon-root{
        cursor: pointer;
        :hover{
            opacity:0.8
        }
    }
`;

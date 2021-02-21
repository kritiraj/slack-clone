import styled from 'styled-components'

export const ChatContainer= styled.div`
    flex:0.7;
    flex-grow:1;
  
    margin-top:60px;
`;

export const HeaderLeft= styled.div`
display:flex;
align-items:center;
    >h4{
        display:flex;
        text-transform:lowercase;
    }
    >h4 > MuiSvgIcon-root{
        margin-left:10px;
        font-size:10px
    }
`;
export const Header= styled.div`
    display:flex;
    justify-content:space-between;
    padding:20px;
    border-bottom:1px solid lightgray;
`;
export const HeaderRight= styled.div`
    > p{
        display:flex;
        align-items:center;
        font-size:14px;
    }
    > p > MuiSvgIcon-root{
        margin-right:5px !important;
        font-size:16px;
    }
`;

export const ChatMessages=styled.div`
    height:70vh;
    overflow-y:scroll;

`
export const ChatBottom=styled.div`
`
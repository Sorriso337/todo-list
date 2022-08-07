import styled from "styled-components";

export const LoginContainer = styled.div`
    width:55%;
    border-radius:24px;
    flex:1;
    background-color: #1C8EF9;
    padding:16px 0px;
`

export const InformationInput = styled.input`
    width:30%;
    opacity:0.7;
    height:1rem;
    background-color: #fcf7f0;
    border-radius:24px;
    padding:16px;   
    margin:8px;
    border:0.8px solid gray;
    font-size:14px;
    :hover{
        background-color: #FFF;
    }
`

export const TitleMessage = styled.h3`
    text-align:center;
    justify-content:center;
    margin:16px 0px;
`

export const ConfirmButton = styled.button`
    
    border-radius: 50px; 
    border: none; 
    box-shadow: 0 0 10px 
    rgba(0, 0, 0, 0.15); 
    cursor: pointer; 
    font-size: 16px; 
    font-weight: 700; 
    padding: 15px 60px; 
    background-color: #CCC; 
    color: #333;
    :hover {
        transform: scale(0.98);
    }
`
export const SeparatorContainer = styled.div`
    display:flex;
    align-content:space-between;
    align-items:center;
    justify-content:space-around;
`
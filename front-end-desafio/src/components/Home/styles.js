import styled from "styled-components";

export const LogoutButton = styled.button`
    width:10%;
    right: 16px;
    top:16px;
    position:fixed;
    border-radius:24px;
    flex:1;
    padding:16px 0px;
    align-content:center;
    justify-content:center;
    background-color:red;

`

export const TaskDiv = styled.div`
    width:80%;
    background-color: #CCC;
    border: 3px black solid;
    border-color: ${props => props.isLate && 'red'};
    border-color: ${props => props.isConcluded && 'green'};
    padding:16px;
    margin:16px;
`

export const TodoTitle = styled.h1`
    text-align:center;
`

export const Spacing = styled.div`
    opacity:0;
    height:200px;
`
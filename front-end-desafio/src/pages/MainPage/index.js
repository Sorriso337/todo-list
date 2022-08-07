import React, { useContext } from 'react';
import Home from '../../components/Home';

import LoginComponent from '../../components/LoginComponent';


import GlobalContext from '../../contexts/globalContext';
import { CenterDiv } from './styles';

export default function MainPage () {

    const { token } = useContext(GlobalContext)
    return(
        <CenterDiv>

        {
         token
         ?
            <Home/>
        :
            <LoginComponent />
        }
        
        </CenterDiv>
    
        )
}
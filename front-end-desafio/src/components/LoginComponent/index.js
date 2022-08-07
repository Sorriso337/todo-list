import React, { useContext } from 'react';
import { 
    LoginContainer,
    InformationInput,
    ConfirmButton,
    SeparatorContainer,
    TitleMessage,
 } from "./styles"

import GlobalContext from '../../contexts/globalContext'


export default function LoginComponent () {

    const { setEmail, setPassword, login, createUser} = useContext(GlobalContext)

    return(
                <LoginContainer>
                    <TitleMessage>Sign in</TitleMessage>
                    <SeparatorContainer>
                        
                        <InformationInput placeholder='Enter email' type="email" pattern=".+@globex\.com" size="30" required onChange={(e) => setEmail(e.target.value)} />

                    </SeparatorContainer>
            
                    <SeparatorContainer>

                        <InformationInput placeholder='Enter password' type="password" onChange={(e) => setPassword(e.target.value)} />

                    </SeparatorContainer>
                    
                    <SeparatorContainer>

                        <ConfirmButton onClick={() => login()}>
                            Login
                        </ConfirmButton>

                        <ConfirmButton onClick={() => createUser()}>
                            Cadastrar
                        </ConfirmButton>
                    </SeparatorContainer>

                </LoginContainer>
    )
}
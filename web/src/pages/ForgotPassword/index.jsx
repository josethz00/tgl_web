import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import AuthContainer from '../../components/AuthContainer';
import AuthTextSection from '../../components/AuthTextSection';
import Input from '../../components/Input';
import InputGroupWrapper from '../../components/InputGroupWrapper';
import { SmSpan, ArrowRightIcon, ArrowLeftIcon, CredentialsSection, ForgotPasswordWrapper, SignUpWrapper } from './styles';


const ForgotPassword = () => {

    const emailInputRef = useRef(null);
    const history = useHistory();

    function handleForgotPassword (event) {

        event.preventDefault();
        const hasErrors = validateFormData();

        if (hasErrors) {

            toast.error('Não foi possível fazer o cadastro!');

        }
        else {

            toast.success('Um link foi enviado para o seu e-mail!');

        }

        return

    }

    function handleNavigateToSignIn () {

        history.push('/');

    }

    function validateFormData () {


        let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!emailInputRef.current.value || !emailRegex.test(emailInputRef.current.value)) {

            return true;
            
        }

        return false;

    }
    
    return (

        <AuthContainer>
            <AuthTextSection />
            <CredentialsSection>
                <SmSpan>
                    Registration
                </SmSpan>
                <InputGroupWrapper onSubmit={handleForgotPassword}>
                    <Input type="email" placeholder="E-mail" ref={emailInputRef} required/>
                    <ForgotPasswordWrapper>
                    </ForgotPasswordWrapper>
                    <SignUpWrapper style={{ marginTop: 0 }} type="submit">
                        <SmSpan style={{ color: '#B5C401' }}>
                            Register
                        </SmSpan>
                        <ArrowRightIcon color="#B5C401"/>
                    </SignUpWrapper>
                </InputGroupWrapper>
                <SignUpWrapper onClick={handleNavigateToSignIn}>
                    <ArrowLeftIcon/>
                    <SmSpan>
                        Back
                    </SmSpan>
                </SignUpWrapper>
            </CredentialsSection>
        </AuthContainer>

    
    );

}

export default ForgotPassword;
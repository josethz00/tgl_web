import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import AuthContainer from '../../components/AuthContainer';
import AuthTextSection from '../../components/AuthTextSection';
import Input from '../../components/Input';
import InputGroupWrapper from '../../components/InputGroupWrapper';
import { SmSpan, ArrowRightIcon, ArrowLeftIcon, CredentialsSection, ForgotPasswordWrapper, SignUpWrapper } from './styles';
import * as AuthActions from '../../store/modules/auth/actions';


const SignUp = ({ signInSuccess }) => {

    const userInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const history = useHistory();

    function handleSignUp (event) {

        event.preventDefault();
        const hasErrors = validateFormData();

        if (hasErrors) {

            toast.error('Não foi possível fazer o cadastro!');

        }

        else {

            toast.success('Cadastro efetuado com sucesso!');

            signInSuccess({ 
                username: emailInputRef.current.value, 
                signed: true 
            });

            history.push('/');

        }

        return;

    }

    function validateFormData () {


        let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!userInputRef.current.value || userInputRef.current.value.length < 2) {

            return true;

        }

        if (!emailInputRef.current.value || !emailRegex.test(emailInputRef.current.value)) {

            return true;
            
        }

        if (!passwordInputRef.current.value || passwordInputRef.current.value.length < 8) {

            return true;

        }

        return false;

    }

    function handleNavigateToSignIn () {

        history.push('/');

    }
    
    return (

        <AuthContainer>
            <AuthTextSection />
            <CredentialsSection>
                <SmSpan>
                    Registration
                </SmSpan>
                <InputGroupWrapper onSubmit={handleSignUp}>
                    <Input type="text" placeholder="Name" ref={userInputRef} required/>
                    <Input type="email" placeholder="E-mail" ref={emailInputRef} required/>
                    <Input type="password" placeholder="Password" ref={passwordInputRef} required/>
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

};

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(SignUp);
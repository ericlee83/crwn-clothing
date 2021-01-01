import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import {SignInSignUpContainer} from './sign-in-sign-up.style';

const SignInAndSignUpPage = () =>(
    <SignInSignUpContainer>
        <SignIn/>
        <SignUp/>
    </SignInSignUpContainer>
);

export default SignInAndSignUpPage;
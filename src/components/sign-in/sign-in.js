import React from "react";
import {SignInContainer,SignInTitleContainer,SignInButtonsContainer} from './sign-in.style'; 
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth,signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {email,password} = this.state;
    try{
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({ email: "", password: "" });
    }catch(error){
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitleContainer>I alrady have an account</SignInTitleContainer>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <SignInButtonsContainer>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </SignInButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;

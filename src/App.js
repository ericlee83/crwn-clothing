import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage/HomePage";
import ShopPage from "./pages/shoppage/Shop";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up";
import Header from "./components/header/header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snpashot=>{
          this.setState({
            currentUser: {
              id: snpashot.id,
              ...snpashot.data()
            }
          },()=>{
            console.log(this.state);
          })
        });
      }
      this.setState({ currentUser: userAuth });
      // console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

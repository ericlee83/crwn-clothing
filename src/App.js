import "./App.css";
import { Switch, Route } from 'react-router-dom';
import { HomePage } from "./pages/homepage/HomePage";
import ShopPage from "./pages/shoppage/Shop";
import Header from "./components/header/header";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

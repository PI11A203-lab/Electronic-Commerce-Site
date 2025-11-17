import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route } from "react-router-dom";
import ProductPage from "./product";
import UploadPage from "./upload";
import LoginPage from "./login";
import UserProfile from "./profile";
import TeamBuilder from "./team";
import PurchasePage from "./purchase";

function App() {
  return (
    <div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPageComponent />
          </Route>
          <Route exact={true} path="/products/:id">
            <ProductPage />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
          <Route exact={true} path="/login">
            <LoginPage />
          </Route>
          <Route exact={true} path="/profile">
            <UserProfile />
          </Route>
          <Route exact={true} path="/team">
            <TeamBuilder />
          </Route>
          <Route exact={true} path="/purchase">
            <PurchasePage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;

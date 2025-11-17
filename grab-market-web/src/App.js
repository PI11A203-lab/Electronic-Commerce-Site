import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route } from "react-router-dom";
import ProductPage from "./product";
import UploadPage from "./upload";
import LoginPage from "./login";
import UserProfile from "./profile";

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
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;

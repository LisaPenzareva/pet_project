import React from "react";
import MainPage from "./MainPage/MainPage";
import {Route, Switch} from "react-router-dom";
import SignIn from "./SignIn";
import Lost from "./LostAndFound/Lost";
import Found from "./LostAndFound/Found";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/signin">
          <SignIn/>
        </Route>
        <Route exact path="/lost">
          <Lost/>
        </Route>
        <Route exact path="/found">
          <Found/>
        </Route>
      </Switch>

    </>
  );
};

export default App;

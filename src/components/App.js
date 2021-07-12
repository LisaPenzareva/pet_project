import React from "react";
import MainPage from "./MainPage/MainPage";
import {Route, Switch} from "react-router-dom";
import SignIn from "./SignUpIn/SignIn";
import Lost from "./LostAndFound/Lost";
import Found from "./LostAndFound/Found";
import LostAndFoundPage from "./LostAndFound/LostAndFoundPage";
import SignPage from "./SignUpIn/SignPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/signin">
          <SignPage/>
        </Route>
        <Route exact path="/lostandfound">
          <LostAndFoundPage/>
        </Route>
        <Route exact path="/lostandfound/lost">
          <Lost/>
        </Route>
        <Route exact path="/lostandfound/found">
          <Found/>
        </Route>
      </Switch>

    </>
  );
};

export default App;

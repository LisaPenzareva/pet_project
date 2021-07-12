import React from "react";
import MainPage from "./MainPage/MainPage";
import { Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import LostAndFoundPage from "./LostAndFound/LostAndFoundPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/lostandfound">
          <LostAndFoundPage isLost={true} />
        </Route>
        <Route exact path="/lostandfound/lost">
          <LostAndFoundPage isLost={true} />
        </Route>
        <Route exact path="/lostandfound/found">
          <LostAndFoundPage isLost={false} />
        </Route>
      </Switch>
    </>
  );
};

export default App;

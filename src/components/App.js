import React from "react";
import MainPage from "./MainPage/MainPage";
import { Route, Switch } from "react-router-dom";
// import SignIn from "./SignIn";
import LostAndFoundPage from "./LostAndFound/LostAndFoundPage";
import SignPage from "./SignUpIn/SignPage";
import PetProfile from "./LostAndFound/PetProfile";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/signin">
          <SignPage />
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
        <Route exact path="/lostandfound/lost/1">
          <PetProfile/>
        </Route>
      </Switch>
    </>
  );
};

export default App;

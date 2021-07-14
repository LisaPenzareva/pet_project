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
        <Route path="/signin">
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
        <Route path="/lostandfound/lost/:id">
          <PetProfile isLost={true} />
        </Route>
        <Route path="/lostandfound/found/:id">
          <PetProfile isLost={false} />
        </Route>
      </Switch>
    </>
  );
};

export default App;

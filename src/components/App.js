import React from "react";
import MainPage from "./MainPage/MainPage";
import { Route, Switch } from "react-router-dom";
import LostAndFoundPage from "./LostAndFound/LostAndFoundPage";
import SignPage from "./SignUpIn/SignPage";
import PetProfileLost from "./LostAndFound/PetProfileLost";
import PetProfileFound from "./LostAndFound/PetProfileFound";
import Home from "./HomePage/Home";
import UserProfile  from "./HomePage/UserProfile";
import {useSelector} from "react-redux";

const App = () => {

  const isAuth = useSelector(state => {
    return state.users.isAuth
  })

  return (
    <>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/homepage">
          { isAuth ? <Home /> : null}
        </Route>
        <Route exact path="/homepage/userprofile">
           <UserProfile/>
        </Route>
        <Route path="/signin">
          <SignPage />
        </Route>
        <Route exact path="/lostandfound">
          <LostAndFoundPage isLostMode={true} />
        </Route>
        <Route exact path="/lostandfound/lost">
          <LostAndFoundPage isLostMode={true} />
        </Route>
        <Route exact path="/lostandfound/found">
          <LostAndFoundPage isLostMode={false} />
        </Route>
        <Route path="/lostandfound/lost/:id">
          <PetProfileLost />
        </Route>
        <Route path="/lostandfound/found/:id">
          <PetProfileFound />
        </Route>
      </Switch>
    </>
  );
};

export default App;

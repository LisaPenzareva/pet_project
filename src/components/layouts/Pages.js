import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../HomePage/Home";
import LostAndFoundPage from "../LostAndFound/LostAndFoundPage";
import SignPage from "../SignUpIn/SignPage";
import PetProfileLost from "../LostAndFound/PetProfileLost";
import PetProfileFound from "../LostAndFound/PetProfileFound";
import NewsFeed from "../Posts/NewsFeed";
import WalkingPosts from "../Posts/WalkingPosts";
import FosteringPosts from "../Posts/FosteringPosts";
import VetHelpPosts from "../Posts/VetHelpPosts";
import UserProfile from "../HomePage/UserProfile";
import LostAndFoundForm from "../LostAndFound/LostAndFoundForm";

const Pages = () => {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Home />
      </Route>
      <Route exact path="/homepage/newsfeed">
        <NewsFeed homeMode={true} />
      </Route>
      <Route exact path="/homepage/walking">
        <WalkingPosts homeMode={false} walkingMode={true} />
      </Route>
      <Route exact path="/homepage/fostering">
        <FosteringPosts homeMode={false} fosteringMode={true} />
      </Route>
      <Route exact={true} path="/homepage/vethelp">
        <VetHelpPosts homeMode={false} vetHelpMode={true} />
      </Route>
        <Route exact={true} path="/lostandfound/form/:lostType">
            <LostAndFoundForm />
        </Route>
        <Route exact={true} path="/lostandfound/form/:lostType">
            <LostAndFoundForm />
        </Route>

      <Route exact path="/homepage/userprofile">
        <UserProfile />
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
  );
};

export default Pages;

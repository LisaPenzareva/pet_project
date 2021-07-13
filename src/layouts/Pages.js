import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/HomePage/Home";


const Pages = () => {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Home />
      </Route>
      {/* <Route path="/signup">
        <AddNewUser />
      </Route>
      <Route path="/users/:id">
        <UserProfile />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/lost">
        <LostPets />
      </Route>
      <Route path="/found">
        <FoundPets />
      </Route>
      <Route exact path="/posts">
        <Posts />
      </Route>
      <Route exact path="/posts/newsfeed">
        <NewsFeed />
      </Route>
      <Route exact path="/posts/walking">
        <WalkingPosts />
      </Route>
      <Route exact path="/posts/fostering">
        <FosteringPosts />
      </Route>
      <Route exact path="/posts/vetHelp">
        <VetHelpPosts />
      </Route>
      <Route exact path="/posts/:id">
        <Post />
      </Route> */}
    </Switch>
  );
};

export default Pages;

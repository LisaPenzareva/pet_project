import React from "react";
import { useSelector } from "react-redux";
import NewsFeed from "../Posts/NewsFeed";
import MainPage from '../MainPage/MainPage'

const Home = () => {
  const isAuth = useSelector((state) => {
    return state.users.isAuth;
  });
  const renderMiddlePart = () => {
    if (isAuth) {
      return <NewsFeed />;
    }
    return <MainPage/>
  };

  return renderMiddlePart();
};

export default Home;

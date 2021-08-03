import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setUserById} from "../../store/actions/actionUsers";
import {connect} from "react-redux";

const RightSide = ({user}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserById(+localStorage.userId));
  }, []);

  useEffect(() => {
    dispatch(setUserById(+localStorage.userId));
  }, [localStorage.userId]);

  console.log(user)

  const renderUserFullName = () => {
    return(
    <div>
      <p>{user.fullName}</p>
    </div> )}

  return <div className="sidebar-right col-2">
    <hr/>
    <div>
      <img src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png" className="user-image" alt="avatar"/>
      {/*{renderUserFullName()}*/}
    </div>
    <hr/>
  </div>;
};

const mapStateToProps = (state) => {
  return {
    user: state.users.userById,
  };
};

export default connect(mapStateToProps, null)(RightSide);

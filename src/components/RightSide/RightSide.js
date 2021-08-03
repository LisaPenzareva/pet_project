import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUserById} from "../../store/actions/actionUsers";
import {connect} from "react-redux";

const RightSide = ({user}) => {

  const isAuth = useSelector((state) => {
    return state.users.isAuth;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserById(+localStorage.userId));
  }, []);

  useEffect(() => {
    dispatch(setUserById(+localStorage.userId));
  }, [+localStorage.userId]);

  // console.log(user)

  const renderUserFullName = () => {
    return(
    <div>
      <p>{user.fullName}</p>
    </div> )}

  return <section className="sidebar-right col-2">

    { !isAuth ?
        null :
        <div>
          <hr style={{color: "white"}}/>
          <div className="d-flex justify-content-between px-1">
            <img src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png" className="user-image" alt="avatar"/>
            <div className="w-50 text-white d-flex align-items-center" style={{fontSize: "16px"}}>{renderUserFullName()}</div>
          </div>
          <hr style={{color: "white"}}/>
        </div>
    }
  </section>;
};

const mapStateToProps = (state) => {
  return {
    user: state.users.userById,
  };
};

export default connect(mapStateToProps, null)(RightSide);

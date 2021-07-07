const InitialState = {
  users: {
    list: [],
    activeUser: null,
    signUpMode: false,
    isAuth: localStorage.token ? true : false,
    editMode: false,
    pet: {
      isLost: false,
      petById: null,
    },
  },

  posts: {
    list: [],
    addPostMode: false,
    walkingMode: false,
    fosteringMode: false,
    vetHelpMode: false,
    homePostMode: false,
    postById: null,
    homePost: {
      like: null,
      comments: [],
    },
  },
};

export default InitialState;

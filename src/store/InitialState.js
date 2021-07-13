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

  pets: {
    lostList: [
      { id: 1,
        isLost: true,
        nickname: "Uncle Sam",
        type: "Dog",
        sex: "Male",
        breed: "Golden Retriever",
        color: "Beige",
        height: "45-70 cm",
        features: "blue collar with stars, no left ear, damaged tail. Junk MTV quiz graced by",
        description: "brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. raced by fox whelps. Bawds jog, flick quartz, vex nymphs.",
        location: "Oliver Platz, Berlin",
        image: "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg",
        contacts: {
          owner: "Anna Smith",
          phone: "000 000 0000",
          email: "anna@mail.com"
        }
      }
    ],
    fondList: [
      { id: 2,
        isLost: false,
        nickname: "Cat Masyanya",
        type: "Cat",
        sex: "Male",
        breed: "Golden Retriever",
        color: "golden",
        height: "45 cm",
        features: "no left ear, damaged tail. Junk MTV quiz graced by",
        description: "Cats are beautiful. fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. raced by fox whelps. Bawds jog, flick quartz, vex nymphs.",
        location: "Schloss Str, Potsdam",
        image: "https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519__340.jpg",
        contacts: {
          owner: "Tom Johns",
          phone: "111 111 1111",
          email: "anna@mail.com"
        }
      }
    ],
  },

};

export default InitialState;

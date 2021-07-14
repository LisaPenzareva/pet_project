const InitialState = {
  users: {
    list: [],
    activeUser: null,
    signUpMode: false,
    isAuth: localStorage.token ? true : false,
    editMode: false,
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
    isLost: false,
    petById: {},
    lostList: [
      {
        id: 1,
        isLost: true,
        nickname: "Uncle Sam",
        type: "Dog",
        sex: "Male",
        breed: "Golden Retriever",
        color: "Beige",
        height: "45-70 cm",
        features:
          "blue collar with stars, no left ear, damaged tail. Junk MTV quiz graced by",
        description:
          "brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. raced by fox whelps. Bawds jog, flick quartz, vex nymphs.",
        location: "Oliver Platz, Berlin",
        image:
          "https://www.guidedogs.org/wp-content/uploads/2015/05/Dog-Im-Not.jpg",
        contacts: {
          owner: "Anna Smith",
          phone: "000 000 0000",
          email: "anna@gmail.com",
        },
      },
      {
        id: 2,
        isLost: true,
        nickname: "Puppy",
        type: "Dog",
        sex: "Female",
        breed: "Golden Retriever",
        color: "Beige",
        height: "30 cm",
        features:
          "blue collar with stars, no left ear, damaged tail. Junk MTV quiz graced by",
        description:
          "brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. raced by fox whelps. Bawds jog, flick quartz, vex nymphs.",
        location: "St-Anna-Str, Munich",
        image: "https://i.redd.it/9o41c22dfxj51.jpg",
        contacts: {
          owner: "John Smith",
          phone: "111 111 1111",
          email: "john@gmail.com",
        },
      },
    ],
    foundList: [
      {
        id: 3,
        isLost: false,
        nickname: "Cat Masyanya",
        type: "Cat",
        sex: "Male",
        breed: "Golden Retriever",
        color: "golden",
        height: "45 cm",
        features: "no left ear, damaged tail. Junk MTV quiz graced by",
        description:
          "Cats are beautiful. fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. raced by fox whelps. Bawds jog, flick quartz, vex nymphs.",
        location: "Schloss Str, Potsdam",
        image:
          "https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519__340.jpg",
        contacts: {
          owner: "Tom Johns",
          phone: "222 222 2222",
          email: "tom@gmail.com",
        },
      },
      {
        id: 4,
        isLost: false,
        nickname: "Hamster Sema",
        type: "Hamster",
        sex: "Male",
        breed: "Golden Retriever",
        color: "golden",
        height: "20 cm",
        features: "no left ear, damaged tail. Junk MTV quiz graced by",
        description:
          "Hamsters are beautiful. fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. raced by fox whelps. Bawds jog, flick quartz, vex nymphs.",
        location: "Schloss Str, Potsdam",
        image:
          "https://www.stuttgarter-nachrichten.de/media.media.7f677ae3-f996-4399-9f28-0f8d67328414.original1024.jpg",
        contacts: {
          owner: "Ivan Sidorov",
          phone: "444 444 4444",
          email: "ivan@gmail.com",
        },
      },
    ],
  },
};

export default InitialState;

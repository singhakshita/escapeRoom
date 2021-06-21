const modalQues = document.querySelector(".modal__question");
const modal = document.querySelector(".modal");
const hint = document.querySelector(".modal__hint");
const hintImage = document.querySelector(".hint_image");
const tableInRoom = document.querySelector(".main__table");
const main = document.querySelector(".main");

const map = document.querySelector(".map");
const mainMap = document.querySelector(".map__map");
const mapKey = document.querySelector(".map__circle--set");

const arthasashtra = document.querySelector(".arthashastra");
const mainArtha = document.querySelector(".artha__expanded");
const arthaKey = document.querySelector(".artha__circle--set");

const indica = document.querySelector(".indica");
const stylus = document.querySelector(".stylus");

const up = document.querySelector(".up");
const right = document.querySelector(".right");
const down = document.querySelector(".down");
const left = document.querySelector(".left");

const clock = document.querySelector(".clock");

const mainTaxila = document.querySelector(".taxila__click");
const mainPalace = document.querySelector(".main__palace");
const mainBalance = document.querySelector(".main__balance");
const mainRoom = document.querySelectorAll(".main-room");

const bedRoom = document.querySelectorAll(".bed-room");
const bedCoins = document.querySelector(".bed__coins");
const bedLetter = document.querySelector(".bed__letter");
const bedElephant = document.querySelector(".bed__elephant");

const shelfRoom = document.querySelectorAll(".shelf-room");
const shelfYoga = document.querySelector(".shelf__yoga");
const shelfManu = document.querySelector(".shelf__manu");

const state = {
  presentIndex: 0,
  eventElement: null,
  answered: 0,
  mapAnswered: 0,
  presentState: 0, // 0 map 1 arthasastra 2 indica 3 stylu

  arthaQues: [
    "Who is the author of Arthasashtra",
    "Science of inquiry or thinking that teaches philosphy of Sankhya, Yoga and Lokayata",
    "The Three Vedas Rig, Yajur and Sama that teaches about Dharmadharmau",
    "Science of trade and commerce",
    "Science of Government",
  ],
  arthaAns: ["vishnugupta", "anvikshiki", "trayi", "varta", "danda niti"],

  arthaHint: ["try his personal name", "translation of manuscript may help"],

  mapQues: [
    "Place Where Chankya mentored Chandragupta Maurya",
    "Capital of the Place which Chandragupta captured after defeating Dhananand",
    "Seleucus I Nicator surrendered to Chandragupta in exchange of 500 elephants,as apart of an amicable treaty between two rulers",
    "Place where Chandragupta retired to after renouncing his throne to son, Bindusara",
  ],
  mapAns: [
    "takshashila",
    "pataliputra",
    "alexandria of arachosia",
    "shravanabelagola",
  ],

  mapHint: [
    "Try the Sanskrit name of the City of Cut Stone ",
    "It is located near the bank of ganges",
    "Time changes everything, Sometimes it even changes the name of the place",
    "His life ended here after performing Sallekhana(fasting until death), at the age of 62",
  ],
  indica: [
    "Author of the text and the greek ambasador to ChandraGupta court",
    "megasthenes",
    "Indica",
  ],
};
const diaplayModal = (arr, idx) => {
  modal.classList.remove("hidden");
  modalQues.textContent = arr[idx];
};
const displayHint = (arr, idx) => {
  hint.classList.remove("hidden");
  hint.textContent = arr[idx];
};
const setMesasage = (msg) => {
  hint.classList.remove("hidden");
  hint.textContent = msg;
};

const checkAnswer = (arr, idx, ans) => {
  ans = ans.toLowerCase();
  if (arr[idx] == ans) return true;
  else return false;
};

const clear = () => {
  if (!modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
  }
  if (!hint.classList.contains("hidden")) {
    hint.classList.add("hidden");
  }
};
const setColor = (isCorrect) => {
  state.eventElement.textContent = "";
  if (isCorrect) {
    state.eventElement.style.backgroundColor = "green";
  } else {
    state.eventElement.style.backgroundColor = "red";
  }
};

const mapClear = () => {
  if (!mainMap.classList.contains("hidden")) {
    mainMap.classList.add("hidden");
  }
};

const arthaClear = () => {
  if (!mainArtha.classList.contains("hidden")) {
    mainArtha.classList.add("hidden");
  }
};

const clearMsg = () => {
  hint.classList.add("hidden");
};
const closeModal = () => {
  if (!modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
  }
};

const tableContentClear = () => {
  map.classList.add("hidden");
  arthasashtra.classList.add("hidden");
  indica.classList.add("hidden");
  stylus.classList.add("hidden");
};
const hideRoomContent = (room) => {
  room.forEach((element) => {
    if (!element.classList.contains("hidden")) {
      element.classList.add("hidden");
    }
  });
};
const showRoomContent = (room) => {
  room.forEach((element) => {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    }
  });
};
const tableOnClick = () => {
  main.style.backgroundImage = "url('./mainAsset/tableUpperView.jpg')";
  tableInRoom.classList.add("hidden");
  map.classList.remove("hidden");
  arthasashtra.classList.remove("hidden");
  indica.classList.remove("hidden");
  stylus.classList.remove("hidden");
  hideRoomContent(mainRoom);
  hideRoomContent(bedRoom);
  hideRoomContent(shelfRoom);
};

tableInRoom.addEventListener("click", tableOnClick);

map.addEventListener("click", () => {
  clear();
  arthaClear();
  mainMap.classList.toggle("hidden");
  state.presentState = 0;
});

arthasashtra.addEventListener("click", () => {
  clear();
  mapClear();
  if (mainArtha.classList.contains("hidden")) {
    mainArtha.classList.remove("hidden");
    diaplayModal(state.arthaQues, 0);
    displayHint(state.arthaHint, 0);
  } else {
    mainArtha.classList.add("hidden");
  }
  state.presentIndex = 0;
  state.presentState = 1;
});

indica.addEventListener("click", () => {
  state.presentState = 2;
  clear();
  mapClear();
  arthaClear();
  diaplayModal(state.indica, 0);
  displayHint(state.indica, 2);
});

stylus.addEventListener("click", () => {
  console.log("working");
  clear();
  mapClear();
  arthaClear();
  setMesasage("Ghantam stylus,used to write on palm manuscripts in old times");
  setTimeout(clearMsg, 1500);
  console.log("working");
});

mapKey.addEventListener("click", (event) => {
  const idx = +event.target.dataset.idx - 1;
  state.presentIndex = idx;
  state.eventElement = event.target;
  diaplayModal(state.mapQues, idx);
  displayHint(state.mapHint, idx);
});
arthaKey.addEventListener("click", (event) => {
  const idx = +event.target.dataset.idx;
  state.eventElement = event.target;
  state.presentIndex = idx;
  state.presentState = 1;
  diaplayModal(state.arthaQues, idx);
  displayHint(state.arthaHint, 1);
});

mainTaxila.addEventListener("click", () => {
  setMesasage("Takshashila");
  setTimeout(clearMsg, 2500);
});
mainPalace.addEventListener("click", () => {
  setMesasage("Wooden Royal Palce at the capital, Pataliputra");
  setTimeout(clearMsg, 2500);
});
mainBalance.addEventListener("click", () => {
  setMesasage("Danda Niti");
  setTimeout(clearMsg, 2500);
});

bedCoins.addEventListener("click", () => {
  setMesasage(
    "During the Mauryan period, the punch-marked coins called Rupyarupa, was made of allloy of silver(11 parts), copper(4 parts) and other metals (1 part). CLUE : Varta"
  );
  setTimeout(clearMsg, 4000);
});
bedElephant.addEventListener("click", () => {
  setMesasage("Alexandria of Arachosia");
  setTimeout(clearMsg, 3000);
});
bedLetter.addEventListener("click", () => {
  hintImage.style.backgroundImage = "url('./CLUES/onClickLetter.png')";
  hintImage.style.display = "block";
  setTimeout(() => {
    hintImage.style.display = "none";
  }, 7000);
});

shelfManu.addEventListener("click", () => {
  setMesasage(
    "Hindu Scriptures include 4 vedas: The Trayi: Rigveda(The Book of mantra),Sama(The Book of Songs),Yajurveda(The Book of Rituals)and the one later added :Athravaeda(The Book of spells)"
  );
  hintImage.style.backgroundImage = "url('./CLUES/shelfManu.png')";
  hintImage.style.display = "block";
  setTimeout(() => {
    hintImage.style.display = "none";
    clearMsg();
  }, 7000);
});

shelfYoga.addEventListener("click", () => {
  setMesasage(
    "Yoga(one of the three Darshanas of Anvikshiki) is about concentration, reflection"
  );
  setTimeout(clearMsg, 3000);
});

document.querySelector(".modal__button").addEventListener("click", () => {
  let ans = document.getElementById("modal-answer").value;
  let ansArr = 0;
  if (state.presentState == 0) {
    ansArr = state.mapAns;
  } else if (state.presentState == 1) {
    ansArr = state.arthaAns;
  } else if (state.presentState == 2) {
    ansArr = state.indica;
    state.presentIndex = 1;
  }
  const isCorrect = checkAnswer(ansArr, state.presentIndex, ans);
  if (isCorrect) {
    state.answered++;
  }
  console.log(state.answered);
  if (isCorrect && state.presentState == 0) state.mapAnswered++;
  if (state.mapAnswered == 4) {
    mainMap.style.backgroundImage = "url('./mainAsset/answerMap.png')";
  }
  if (
    state.presentState == 0 ||
    (state.presentState == 1 && state.presentIndex != 0)
  ) {
    setColor(isCorrect);
  }
  isCorrect
    ? setMesasage("correct Answer !!")
    : setMesasage("wrong Answer  :(");

  document.getElementById("modal-answer").value = "";
  modal.classList.add("hidden");
  setTimeout(clearMsg, 1500);
  if (state.answered == 10) {
    setTimeout(() => {
      setMesasage("look there is something on the shelf .Hurry!!!");
      clearMsg();
    }, 2000);
    setTimeout(() => {
      main.style.backgroundImage = "url('./mainAsset/shelfRoom.png')";

      tableContentClear();
      mapClear();
      arthaClear();
      clock.classList.remove("hidden");
    }, 4000);
  }
});

clock.addEventListener("click", () => {
  main.style.backgroundImage = "url('./mainAsset/clockClick.jpg')";
  clock.classList.add("hidden");
  setMesasage("Bang Bang !!!,someone is banging the door");
  setTimeout(() => {
    main.style.backgroundImage = "url('./mainAsset/doorBang.png')";
    clearMsg();
  }, 4000);
  setTimeout(() => {
    main.style.backgroundImage = "url('./mainAsset/shelfTunnel.jpg')";
  }, 8000);
});

up.addEventListener("click", () => {
  tableOnClick();
  clearMsg();
  arthaClear();
  mapClear();
  closeModal();
  hideRoomContent(mainRoom);
  hideRoomContent(bedRoom);
  hideRoomContent(shelfRoom);
});

right.addEventListener("click", () => {
  main.style.backgroundImage = "url('./mainAsset/upBed.jpg')";
  tableInRoom.classList.add("hidden");
  tableContentClear();
  clearMsg();
  arthaClear();
  mapClear();
  closeModal();
  showRoomContent(bedRoom);
  hideRoomContent(mainRoom);
  hideRoomContent(shelfRoom);
});

down.addEventListener("click", () => {
  main.style.backgroundImage = "url('./mainAsset/shelfRoom.png')";
  tableInRoom.classList.add("hidden");
  tableContentClear();
  clearMsg();
  arthaClear();
  mapClear();
  closeModal();
  hideRoomContent(bedRoom);
  hideRoomContent(mainRoom);
  showRoomContent(shelfRoom);
});

left.addEventListener("click", () => {
  main.style.backgroundImage = "url('./mainAsset/mainRoom.png')";
  tableInRoom.classList.remove("hidden");
  tableContentClear();
  clearMsg();
  arthaClear();
  mapClear();
  closeModal();
  showRoomContent(mainRoom);
  hideRoomContent(bedRoom);
  hideRoomContent(shelfRoom);
});

const restore = () => {
  main.style.backgroundImage = "url('./mainAsset/mainRoom.png')";
};

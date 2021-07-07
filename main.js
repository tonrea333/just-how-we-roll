/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function (max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);
  return result;
}

const sortByNumber = function (arr) {
  const byNumber = function (item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/



/*******************
 * EVENT LISTENERS *
 *******************/
const dieNumberOne = document.querySelector("#d6-button");
const oneSixDie = document.querySelector("#d6-roll");
//Dice one
dieNumberOne.addEventListener("click", onClick);
function onClick() {
  let rng = getRandomNumber(6);
  getRandomNumber(6);

  if (rng == 1) {
    oneSixDie.src = "images/d6/1.png"
  } else if (rng == 2) {
    oneSixDie.src = "images/d6/2.png"
  } else if (rng == 3) {
    oneSixDie.src = "images/d6/3.png"
  } else if (rng == 4) {
    oneSixDie.src = "images/d6/4.png"
  } else if (rng == 5) {
    oneSixDie.src = "images/d6/5.png"
  } else if (rng == 6) {
    oneSixDie.src = "images/d6/6.png"
  }
  console.log(rng);
}
//================================================

const dieNumberTwo = document.querySelector("#double-d6-buttons");
const dieNumberThree = document.querySelector("#double-d6-buttons");
const oneSixDie2 = document.querySelector("#double-d6-roll-1");
const oneSixDie3 = document.querySelector("#double-d6-roll-2");

//TwoDice==============


dieNumberTwo.addEventListener("click", onClick2);

 function onClick2() {
  let rng = getRandomNumber(6);
  getRandomNumber(6);

  if (rng == 1) {
    oneSixDie2.src = "images/d6/1.png"
  } else if (rng == 2) {
    oneSixDie2.src = "images/d6/2.png"
  } else if (rng == 3) {
    oneSixDie2.src = "images/d6/3.png"
  } else if (rng == 4) {
    oneSixDie2.src = "images/d6/4.png"
  } else if (rng == 5) {
    oneSixDie2.src = "images/d6/5.png"
  } else if (rng == 6) {
    oneSixDie2.src = "images/d6/6.png"
  }
  console.log(rng);
}

dieNumberThree.addEventListener("click", onClick3);
function onClick3() {
  let rng = getRandomNumber(6);
  getRandomNumber(6);

  if (rng == 1) {
    oneSixDie3.src = "images/d6/1.png"
  } else if (rng == 2) {
    oneSixDie3.src = "images/d6/2.png"
  } else if (rng == 3) {
    oneSixDie3.src = "images/d6/3.png"
  } else if (rng == 4) {
    oneSixDie3.src = "images/d6/4.png"
  } else if (rng == 5) {
    oneSixDie3.src = "images/d6/5.png"
  } else if (rng == 6) {
    oneSixDie3.src = "images/d6/6.png"
  }
}
//==========================================================
//Dice number four

const dieNumberFour = document.querySelector("#d12-button");
const oneSixDie4 = document.querySelector("#d12-roll");

dieNumberFour.addEventListener("click", onClick4);
function onClick4() {
  let rng = getRandomNumber(12);
  getRandomNumber(12);

  if (rng == 1) {
    oneSixDie4.src = "images/numbers/1.png"
  } else if (rng == 2) {
    oneSixDie4.src = "images/numbers/2.png"
  } else if (rng == 3) {
    oneSixDie4.src = "images/numbers/3.png"
  } else if (rng == 4) {
    oneSixDie4.src = "images/numbers/4.png"
  } else if (rng == 5) {
    oneSixDie4.src = "images/numbers/5.png"
  } else if (rng == 6) {
    oneSixDie4.src = "images/numbers/6.png"
  } else if (rng == 7) {
    oneSixDie4.src = "images/numbers/7.png"
  } else if (rng == 8) {
    oneSixDie4.src = "images/numbers/8.png"
  } else if (rng == 9) {
    oneSixDie4.src = "images/numbers/9.png"
  } else if (rng == 10) {
    oneSixDie4.src = "images/numbers/10.png"
  } else if (rng == 11) {
    oneSixDie4.src = "images/numbers/11.png"
  } else if (rng == 12) {
    oneSixDie4.src = "images/numbers/12.png"

  }
  console.log(rng);

  }
//=================================================================

//20 Sided dice========================

const dieNumberFour = document.querySelector("#d12-button");
const oneSixDie4 = document.querySelector("#d12-roll");

dieNumberFour.addEventListener("click", onClick4);
function onClick4() {
  let rng = getRandomNumber(12);
  getRandomNumber(12);

  if (rng == 1) {
    oneSixDie4.src = "images/numbers/1.png"
  } else if (rng == 2) {
    oneSixDie4.src = "images/numbers/2.png"
  } else if (rng == 3) {
    oneSixDie4.src = "images/numbers/3.png"
  } else if (rng == 4) {
    oneSixDie4.src = "images/numbers/4.png"
  } else if (rng == 5) {
    oneSixDie4.src = "images/numbers/5.png"
  } else if (rng == 6) {
    oneSixDie4.src = "images/numbers/6.png"
  } else if (rng == 7) {
    oneSixDie4.src = "images/numbers/7.png"
  } else if (rng == 8) {
    oneSixDie4.src = "images/numbers/8.png"
  } else if (rng == 9) {
    oneSixDie4.src = "images/numbers/9.png"
  } else if (rng == 10) {
    oneSixDie4.src = "images/numbers/10.png"
  } else if (rng == 11) {
    oneSixDie4.src = "images/numbers/11.png"
  } else if (rng == 12) {
    oneSixDie4.src = "images/numbers/12.png"

  }
  console.log(rng);

  }


/******************
 * RESET FUNCTION *
 ******************/



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/

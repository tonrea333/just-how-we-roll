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

/******************
 * RESET FUNCTION *
 ******************/



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/

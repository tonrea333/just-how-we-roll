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
const meanID = document.querySelector("#d6-rolls-mean");
//Dice one
oneSixDie.src = "images/start/d6.png";
dieNumberOne.addEventListener("click", onClick);
function onClick() {
  let rng = getRandomNumber(6);
  getRandomNumber(6);

let count = 0;
sixes.reduce

count = 1 + count;

  if (rng == 1) {
    oneSixDie.src = "images/d6/1.png"
     sixes.push(1);
     
  } else if (rng == 2) {
    oneSixDie.src = "images/d6/2.png"
     sixes.push(2);
     
  } else if (rng == 3) {
    oneSixDie.src = "images/d6/3.png"
     sixes.push(3);
     
  } else if (rng == 4) {
    oneSixDie.src = "images/d6/4.png"
     sixes.push(4);
     
  } else if (rng == 5) {
    oneSixDie.src = "images/d6/5.png"
     sixes.push(5) ;
     
  } else if (rng == 6) {
    oneSixDie.src = "images/d6/6.png"
     sixes.push(6);
     
  } const meanID = document.querySelector("#d6-rolls-mean")
  //const sum =sixes.reduce((accumulator, num) => {
  


function whatisMean(sixes){
  let sum = 0, i;
  for(let i = 0; 1 < sixes.length; i++){
    sum = sum + sixes[i];
    return sum/sixes.length;
    console.log(sum)
  }
}whatisMean(sixes);

   // let count = 0;
    //count = count + 1;
  
  //console.log ((accumulator + num)/2);
  //});
  //let x = sixes[i]/sum;
 // meanID.x;
  //console.log(x)
  console.log(sixes);
  console.log(count);
  
  
}


//================================================

const dieNumberTwo = document.querySelector("#double-d6-buttons");
const dieNumberThree = document.querySelector("#double-d6-buttons");
const oneSixDie2 = document.querySelector("#double-d6-roll-1");
const oneSixDie3 = document.querySelector("#double-d6-roll-2");

oneSixDie2.src = "images/start/d6.png";
oneSixDie3.src = "images/start/d6.png";

//TwoDice==============


dieNumberTwo.addEventListener("click", onClick2);

 function onClick2() {
  let rng = getRandomNumber(6);
  getRandomNumber(6);

  if (rng == 1) {
    oneSixDie2.src = "images/d6/1.png";
    doubleSixes.push(1);
  } else if (rng == 2) {
    oneSixDie2.src = "images/d6/2.png";
    doubleSixes.push(2);
  } else if (rng == 3) {
    oneSixDie2.src = "images/d6/3.png";
    doubleSixes.push(3);
  } else if (rng == 4) {
    oneSixDie2.src = "images/d6/4.png";
    doubleSixes.push(4);
  } else if (rng == 5) {
    oneSixDie2.src = "images/d6/5.png";
    doubleSixes.push(5);
  } else if (rng == 6) {
    oneSixDie2.src = "images/d6/6.png";
    doubleSixes.push(6);
  }
  console.log(rng);
}

dieNumberThree.addEventListener("click", onClick3);
function onClick3() {
  let rng = getRandomNumber(6);
  getRandomNumber(6);

  if (rng == 1) {
    oneSixDie3.src = "images/d6/1.png";
    doubleSixes.push(1);
  } else if (rng == 2) {
    oneSixDie3.src = "images/d6/2.png";
    doubleSixes.push(2);
  } else if (rng == 3) {
    oneSixDie3.src = "images/d6/3.png";
    doubleSixes.push(3);
  } else if (rng == 4) {
    oneSixDie3.src = "images/d6/4.png";
    doubleSixes.push(4);
  } else if (rng == 5) {
    oneSixDie3.src = "images/d6/5.png";
    doubleSixes.push(5);
  } else if (rng == 6) {
    oneSixDie3.src = "images/d6/6.png";
    doubleSixes.push(6);
  }
}
//==========================================================
//Dice number four

const dieNumberFour = document.querySelector("#d12-button");
const oneSixDie4 = document.querySelector("#d12-roll");
oneSixDie4.src = "images/start/d12.jpeg";
dieNumberFour.addEventListener("click", onClick4);
function onClick4() {
  let rng = getRandomNumber(12);
  getRandomNumber(12);

  if (rng == 1) {
    oneSixDie4.src = "images/numbers/1.png";
    twelves.push(1);
  } else if (rng == 2) {
    oneSixDie4.src = "images/numbers/2.png";
    twelves.push(2);
  } else if (rng == 3) {
    oneSixDie4.src = "images/numbers/3.png";
    twelves.push(3);
  } else if (rng == 4) {
    oneSixDie4.src = "images/numbers/4.png";
    twelves.push(4);
  } else if (rng == 5) {
    oneSixDie4.src = "images/numbers/5.png";
    twelves.push(5);
  } else if (rng == 6) {
    oneSixDie4.src = "images/numbers/6.png";
    twelves.push(6);
  } else if (rng == 7) {
    oneSixDie4.src = "images/numbers/7.png";
    twelves.push(7);
  } else if (rng == 8) {
    oneSixDie4.src = "images/numbers/8.png";
    twelves.push(8);
  } else if (rng == 9) {
    oneSixDie4.src = "images/numbers/9.png";
    twelves.push(9);
  } else if (rng == 10) {
    oneSixDie4.src = "images/numbers/10.png";
    twelves.push(10);
  } else if (rng == 11) {
    oneSixDie4.src = "images/numbers/11.png";
    twelves.push(11);
  } else if (rng == 12) {
    oneSixDie4.src = "images/numbers/12.png";
    twelves.push(12);

  }
  console.log(rng);

  }
//=================================================================

//20 Sided dice========================

const dieNumberFive = document.querySelector("#d20-button");
const oneSixDie5 = document.querySelector("#d20-roll");
oneSixDie5.src = "images/start/d20.jpg"
dieNumberFive.addEventListener("click", onClick5);
function onClick5() {
  let rng = getRandomNumber(20);
  getRandomNumber(20);

  if (rng == 1) {
    oneSixDie5.src = "images/numbers/1.png";
    twenties.push(1);
  } else if (rng == 2) {
    oneSixDie5.src = "images/numbers/2.png";
    twenties.push(2);
  } else if (rng == 3) {
    oneSixDie5.src = "images/numbers/3.png";
    twenties.push(3);
  } else if (rng == 4) {
    oneSixDie5.src = "images/numbers/4.png";
    twenties.push(4);
  } else if (rng == 5) {
    oneSixDie5.src = "images/numbers/5.png";
    twenties.push(5);
  } else if (rng == 6) {
    oneSixDie5.src = "images/numbers/6.png";
    twenties.push(6);
  } else if (rng == 7) {
    oneSixDie5.src = "images/numbers/7.png";
    twenties.push(7);
  } else if (rng == 8) {
    oneSixDie5.src = "images/numbers/8.png";
    twenties.push(8);
  } else if (rng == 9) {
    oneSixDie5.src = "images/numbers/9.png";
    twenties.push(9);
  } else if (rng == 10) {
    oneSixDie5.src = "images/numbers/10.png";
    twenties.push(10);
  } else if (rng == 11) {
    oneSixDie5.src = "images/numbers/11.png";
    twenties.push(11);
  } else if (rng == 12) {
    oneSixDie5.src = "images/numbers/12.png";
    twenties.push(12);
  } else if (rng == 13) {
    oneSixDie5.src = "images/numbers/13.png";
    twenties.push(13);
  } else if (rng == 14) {
    oneSixDie5.src = "images/numbers/14.png";
    twenties.push(14);
  } else if (rng == 15) {
    oneSixDie5.src = "images/numbers/15.png";
    twenties.push(15);
  } else if (rng == 16) {
    oneSixDie5.src = "images/numbers/16.png";
    twenties.push(16);
  } else if (rng == 17) {
    oneSixDie5.src = "images/numbers/17.png";
    twenties.push(17);
  } else if (rng == 18) {
    oneSixDie5.src = "images/numbers/18.png";
    twenties.push(18);
  } else if (rng == 19) {
    oneSixDie5.src = "images/numbers/19.png";
    twenties.push(19);
  } else if (rng == 20) {
    oneSixDie5.src = "images/numbers/20.png";
    twenties.push(20);
  } 
  console.log(rng);
  }
//==============================================
//Reset Button=======================

const resetAll = document.querySelector("#reset-button");

resetAll.addEventListener("click", onClick6);
function onClick6() {
oneSixDie.src = "images/start/d6.png";
oneSixDie2.src = "images/start/d6.png";
oneSixDie3.src = "images/start/d6.png";
oneSixDie4.src = "images/start/d12.jpeg";
oneSixDie5.src = "images/start/d20.jpg";
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


//sixes.reduce(onClick);

//function onClick(total, num){
  //return total - num;
//}
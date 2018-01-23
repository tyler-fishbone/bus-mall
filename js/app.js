'use strict';

// global variables
//    array to hold all products

// indexes to hold different products
var randomIndexOne;
var randomIndexTwo;
var randomIndexThree;

// Array so we can check whether current indexes are different thatn previous
Product.lastDisplayed = [];

// access section element from the DOM
var sectionEl = document.getElementById('product-pictures');

// array of all product instances
Product.allProducts = [];
Product.setsOfProductsShown = 0;
Product.limitOfProductsShown = 25;

// array of img IDs
// Product.imgIds = ['imgOne', 'imgTwo', 'imgThree'];
var resultsList = document.getElementById('results-list');

// constructor for products
//    properties: filepath, name, times displayed, times clicked
function Product(filepath, name, timesDisplayed, timesClicked) {
  this.filepath = filepath;
  this.name = name;
  this.timesDisplayed = timesDisplayed;
  this.timesClicked = timesClicked;
  Product.allProducts.push(this);
}

// instantiate Product instances
new Product('img/bag.jpg', 'Bag', 0, 0);
new Product('img/banana.jpg', 'Banana', 0, 0);
new Product('img/bathroom.jpg', 'Bathroom', 0, 0);
new Product('img/boots.jpg', 'Boots', 0, 0);
new Product('img/bubblegum.jpg', 'Bubble Gum', 0, 0);
new Product('img/chair.jpg', 'Chair', 0, 0);
new Product('img/cthulhu.jpg', 'Cthulhu', 0, 0);
new Product('img/dog-duck.jpg', 'Dog Duck', 0, 0);
new Product('img/dragon.jpg', 'Dragon', 0, 0);
new Product('img/pen.jpg', 'Pen', 0, 0);
new Product('img/pet-sweep.jpg', 'Pet Sweep', 0, 0);
new Product('img/scissors.jpg', 'Scissors', 0, 0);
new Product('img/shark.jpg', 'Shark', 0, 0);
new Product('img/sweep.png', 'Sweep', 0, 0);
new Product('img/tauntaun.jpg', 'Tauntaun', 0, 0);
new Product('img/unicorn.jpg', 'Unicorn', 0, 0);
new Product('img/usb.gif', 'usb', 0, 0);
new Product('img/water-can.jpg', 'Water Can', 0, 0);
new Product('img/wine-glass.jpg', 'Wine Glass', 0, 0);

// Acess the DOM to get elements
var imgElOne = document.getElementById('imgOne');
var imgElTwo = document.getElementById('imgTwo');
var imgElThree = document.getElementById('imgThree');

function displayResults() {
  var newPrompt = document.getElementById('prompt');
  newPrompt.innerHTML = 'Check out your results!';
  for(var i in Product.allProducts){
    var olEl = document.createElement('li');
    olEl.textContent = Product.allProducts[i].timesClicked + ' vote(s) for ' + Product.allProducts[i].name;
    resultsList.appendChild(olEl);
  }
}

// get three random Indexes that are unique
function threeRandomIndexes() {
  do {
    randomIndexOne = Math.floor(Math.random() * Product.allProducts.length);
    randomIndexTwo = Math.floor(Math.random() * Product.allProducts.length);
    randomIndexThree = Math.floor(Math.random() * Product.allProducts.length);
    console.log('duplicate!');
  }
  while (randomIndexOne === randomIndexTwo || randomIndexTwo === randomIndexThree || randomIndexThree === randomIndexOne || Product.lastDisplayed.includes(randomIndexOne) || Product.lastDisplayed.includes(randomIndexTwo) || Product.lastDisplayed.includes(randomIndexThree));

  // fill lastDisplayed array with indices of array for checking
  Product.lastDisplayed[0] = randomIndexOne;
  Product.lastDisplayed[1] = randomIndexTwo;
  Product.lastDisplayed[2] = randomIndexThree;
  // console.log(Product.lastDisplayed);
}

function getSetOfThreeProducts() {
  threeRandomIndexes();
  
  // image one
  imgElOne.src = Product.allProducts[randomIndexOne].filepath;
  imgElOne.alt = Product.allProducts[randomIndexOne].name;
  Product.allProducts[randomIndexOne].timesDisplayed ++;

  //image two
  imgElTwo.src = Product.allProducts[randomIndexTwo].filepath;
  imgElTwo.alt = Product.allProducts[randomIndexTwo].name;
  Product.allProducts[randomIndexTwo].timesDisplayed ++;

  //image three
  imgElThree.src = Product.allProducts[randomIndexThree].filepath;
  imgElThree.alt = Product.allProducts[randomIndexThree].name;
  Product.allProducts[randomIndexThree].timesDisplayed ++;

  Product.setsOfProductsShown++;
}

// function that runs when picture is clicked
function handleClick(e) {
  // ++ to all goats shown
  Product.setsOfProductsShown++;

  if (Product.setsOfProductsShown >= Product.limitOfProductsShown) {
    sectionEl.removeEventListener('click', handleClick);
    displayResults();
  }

  // loop through and ++ to the timesClicked property
  for(var i in Product.allProducts){
    if(e.target.alt === Product.allProducts[i].name){
      Product.allProducts[i].timesClicked++;
    } else {
    getSetOfThreeProducts();
  }
}

// event listener
sectionEl.addEventListener('click', handleClick);

// // event listener - old
// imgElOne.addEventListener('click', picOneClick);
// imgElTwo.addEventListener('click', picTwoClick);
// imgElThree.addEventListener('click', picThreeClick);

// call function for initially choosing a random picture
getSetOfThreeProducts();
'use strict';

// global variables
//    array to hold all products
var randomIndexOne = 0;
var randomIndexTwo = 0;
var randomIndexThree = 0;
Product.allProducts = [];
Product.setsOfProductsShown = 0;
Product.limitOfProductsShown = 25;
// array of img IDs
Product.imgIds = ['imgOne', 'imgTwo', 'imgThree'];

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
// bag banana bathroom boots breakfast
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

var imgElOne = document.getElementById('imgOne');
var imgElTwo = document.getElementById('imgTwo');
var imgElThree = document.getElementById('imgThree');

function picOneClick() {
  Product.allProducts[randomIndexOne].timesClicked ++;
  getSetOfThreeProducts();
}

function picTwoClick() {
  Product.allProducts[randomIndexTwo].timesClicked ++;
  getSetOfThreeProducts();
}

function picThreeClick() {
  Product.allProducts[randomIndexThree].timesClicked ++;
  getSetOfThreeProducts();
}

function displayResults() {
  alert('Thanks for taking our survey, here are the results');
}


function getSetOfThreeProducts() {
  if (Product.setsOfProductsShown === 10) {
    imgElOne.removeEventListener('click', picOneClick);
    imgElTwo.removeEventListener('click', picTwoClick);
    imgElThree.removeEventListener('click', picThreeClick);
    displayResults();
  }

  // get three random Indexes
  randomIndexOne = Math.floor(Math.random() * Product.allProducts.length);
  randomIndexTwo = Math.floor(Math.random() * Product.allProducts.length);
  randomIndexThree = Math.floor(Math.random() * Product.allProducts.length);
  
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


// event listener

imgElOne.addEventListener('click', picOneClick);
imgElTwo.addEventListener('click', picTwoClick);
imgElThree.addEventListener('click', picThreeClick);


// call function for initially choosing a random picture
getSetOfThreeProducts();
'use strict';

// Array so we can check whether current set indexes contains no repeats from previous
Product.lastDisplayed = [];

// access DOM to create product pictures
var sectionEl = document.getElementById('product-pictures');

// array of all product instances
Product.allProducts = [];

//
Product.setsOfProductsShown = 0;
Product.limitOfProductsShown = 25;

// Access DOM to create list of product clicked on
var resultsList = document.getElementById('results-list');

// constructor for products
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

// get three random Indexes that are unique
function threeRandomProducts() {
  var randomIndexOne = Math.floor(Math.random() * Product.allProducts.length);
  var randomIndexTwo = Math.floor(Math.random() * Product.allProducts.length);
  var randomIndexThree = Math.floor(Math.random() * Product.allProducts.length);
  
  // if random indices generated match eachother or any from the previous set, generate new indices
  while (randomIndexOne === randomIndexTwo || randomIndexTwo === randomIndexThree || randomIndexThree === randomIndexOne || Product.lastDisplayed.includes(randomIndexOne) || Product.lastDisplayed.includes(randomIndexTwo) || Product.lastDisplayed.includes(randomIndexThree)) {
    randomIndexOne = Math.floor(Math.random() * Product.allProducts.length);
    randomIndexTwo = Math.floor(Math.random() * Product.allProducts.length);
    randomIndexThree = Math.floor(Math.random() * Product.allProducts.length);
    console.log('duplicate!');
  }
  
  // display image One
  imgElOne.src = Product.allProducts[randomIndexOne].filepath;
  imgElOne.alt = Product.allProducts[randomIndexOne].name;
  Product.allProducts[randomIndexOne].timesDisplayed ++;
  
  // disply image two
  imgElTwo.src = Product.allProducts[randomIndexTwo].filepath;
  imgElTwo.alt = Product.allProducts[randomIndexTwo].name;
  Product.allProducts[randomIndexTwo].timesDisplayed ++;
  
  // display image three
  imgElThree.src = Product.allProducts[randomIndexThree].filepath;
  imgElThree.alt = Product.allProducts[randomIndexThree].name;
  Product.allProducts[randomIndexThree].timesDisplayed ++;

  // load lastDisplayed array so we can check on next click for dups
  Product.lastDisplayed[0] = randomIndexOne;
  Product.lastDisplayed[1] = randomIndexTwo;
  Product.lastDisplayed[2] = randomIndexThree;

  //increment our counter setsOfProductsShows by 1
  Product.setsOfProductsShown++;
}

// function that runs when picture is clicked
function handleClick(e) {
  // check to see if we have gotten to our limitOfProductShow
  if (Product.setsOfProductsShown >= Product.limitOfProductsShown) {
    sectionEl.removeEventListener('click', handleClick);
    displayResults();
  } else {
    threeRandomProducts();
  }
  
  // ++ to the timesClicked property for image user click on
  for(var i in Product.allProducts){
    if(e.target.alt === Product.allProducts[i].name){
      Product.allProducts[i].timesClicked++;
    }
  }
}

// display the results of the survey to the user
function displayResults() {
  var newPrompt = document.getElementById('prompt');
  newPrompt.innerHTML = 'Check out your results!';
  for(var i in Product.allProducts){
    var olEl = document.createElement('li');
    olEl.textContent = Product.allProducts[i].timesClicked + ' vote(s) for ' + Product.allProducts[i].name;
    resultsList.appendChild(olEl);
  }
}

// event listener
sectionEl.addEventListener('click', handleClick);

// call function on page load
threeRandomProducts();
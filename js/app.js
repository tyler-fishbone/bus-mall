'use strict';

// global variables
//    array to hold all products
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
new Product('img/usb.jpg', 'usb', 0, 0);
new Product('img/water-can.jpg', 'Water Can', 0, 0);
new Product('img/wine-glass.jpg', 'Wine Glass', 0, 0);


var imgElOne = document.getElementById('imgOne');
var imgElTwo = document.getElementById('imgTwo');
var imgElThree = document.getElementById('imgThree');


// function for choosing a random picture
function getSetOfThreeProducts() {
  //    access dom
  var randomIndex = Math.floor(Math.random() * Product.allProducts.length);
  imgElOne.src = Product.allProducts[randomIndex].filepath;
  imgElOne.alt = Product.allProducts[randomIndex].name;
  Product.allProducts[randomIndex].timesDisplayed ++;

  randomIndex = Math.floor(Math.random() * Product.allProducts.length);
  imgElTwo.src = Product.allProducts[randomIndex].filepath;
  imgElTwo.alt = Product.allProducts[randomIndex].name;
  Product.allProducts[randomIndex].timesDisplayed ++;

  randomIndex = Math.floor(Math.random() * Product.allProducts.length);
  imgElThree.src = Product.allProducts[randomIndex].filepath;
  imgElThree.alt = Product.allProducts[randomIndex].name;
  Product.allProducts[randomIndex].timesDisplayed ++;

  console.log('You\'ve got: ' + imgElOne.alt);

  Product.setsOfProductsShown ++;
  if sets
  //      if timesclicked == 25 show results
}

// function for rendering 3 pictures
//    ++ overall counter
//    ++ times clicked

// function to display results after 25 guesses


// event listener

imgElOne.addEventListener('click', getSetOfThreeProducts);
imgElTwo.addEventListener('click', getSetOfThreeProducts);
imgElThree.addEventListener('click', getSetOfThreeProducts);


// call function for initially choosing a random picture
getSetOfThreeProducts();
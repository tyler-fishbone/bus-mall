'use strict';

// global variables
//    array to hold all products
Product.allProducts = [];
//    var setsOfThreeShown
Product.setsOfProductsShown = 0;
Product.limitOfProductsShown = 25;

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
new Product('img/breakfast.jpg', 'Breakfast', 0, 0);


// function for choosing a random picture
//    access dom
//    ++ times displayed for each

// function for rendering 3 pictures
//    ++ overall counter
//    ++ times clicked
//      if timesclicked == 25 show results

// function to display results after 25 guesses


// event listener

// call function for initially choosing a random picture
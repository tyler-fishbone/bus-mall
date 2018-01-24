'use strict';

// array so we can check whether current set indexes contains no repeats from previous
Product.lastDisplayed = [];

// access DOM to create product pictures
var sectionEl = document.getElementById('product-pictures');

// array of all product instances
Product.allProducts = [];

// hold how many sets of products we've shown so far
Product.setsOfProductsShown = 0;

// sets how many products we will show
Product.limitOfProductsShown = 10;

// access DOM to create list of product clicked on
var resultsList = document.getElementById('results-list');

// array of product names
var arrayOfProductNames = [];

// array of product clicks
var arrayOfProductVoteTotals = [];

// array of shown totals
var arrayOfShownTotals = [];

// constructor for products
function Product(filepath, name, timesShown, timesClicked) {
  this.filepath = filepath;
  this.name = name;
  this.timesShown = timesShown;
  this.timesClicked = timesClicked;
  Product.allProducts.push(this);
  arrayOfProductNames.push(this.name);
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
  Product.allProducts[randomIndexOne].timesShown ++;
  
  // disply image two
  imgElTwo.src = Product.allProducts[randomIndexTwo].filepath;
  imgElTwo.alt = Product.allProducts[randomIndexTwo].name;
  Product.allProducts[randomIndexTwo].timesShown ++;
  
  // display image three
  imgElThree.src = Product.allProducts[randomIndexThree].filepath;
  imgElThree.alt = Product.allProducts[randomIndexThree].name;
  Product.allProducts[randomIndexThree].timesShown ++;

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
    updateVoteTotals();
    updateShownTotals();
    displayResults();
    renderChart();
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
    olEl.textContent = Product.allProducts[i].timesClicked + ' vote(s) for ' + Product.allProducts[i].name + ' out of ' + Product.allProducts[i].timesClicked + ' times.';
    resultsList.appendChild(olEl);
  }
}

function updateVoteTotals() {
  for(var i in Product.allProducts){
    arrayOfProductVoteTotals.push(Product.allProducts[i].timesClicked);
  }
}

function updateShownTotals() {
  for(var i in Product.allProducts){
    arrayOfShownTotals.push(Product.allProducts[i].timesShown);
  }
}

// render chart for displaying data
function renderChart() {
  var ctx = document.getElementById('chart-placeholder').getContext('2d');

  var timesShownData = {
    label: 'How Many Times the Product was Shown',
    data: arrayOfShownTotals,
    backgroundColor: 'rgba(99, 132, 0, 0.6)',
    borderWidth: 0,
  };

  var timesClickedData = {
    label: 'How Many Times the Product was Voted For',
    data: arrayOfProductVoteTotals,
    backgroundColor: 'rgba(0, 99, 132, 0.6)',
    borderWidth: 0,
  };

  var productData = {
    labels: arrayOfProductNames,
    datasets: [timesClickedData, timesShownData]
  };

  // chart
  var productChart = new Chart(ctx, {
    type: 'bar',
    data: productData,
    responsive: false,
    options: {
      scales: {
        xAxes: [{
          barPercentage: 1,
          categoryPercentage: .6,
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}


// event listener
sectionEl.addEventListener('click', handleClick);

// call function on page load
threeRandomProducts();
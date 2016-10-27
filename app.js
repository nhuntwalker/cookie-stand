'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locations = [];

function CookieStore (location, minHourly, maxHourly, avgSale) {
  this.location = location;
  this.minHourly = minHourly;
  this.maxHourly = maxHourly;
  this.avgSale = avgSale;
  this.hourlySales = [];
  this.totalDailySales = [];
  this.storeTotals = 0;

  // random customer amount
  this.randomNumCust = function () {
    return Math.floor(Math.random() * (this.maxHourly - this.minHourly) + this.minHourly);
  };
  // calculate cookie sales
  this.calcCookieSales = function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalDailySales[i] = Math.floor(this.randomNumCust() * this.avgSale);
      this.storeTotals += this.totalDailySales[i];
    }
  };
  // attach store name to a h2 header
  this.attachStoreName = function () {
    var h2 = document.createElement('h2');
    h2.innerText = (this.location);
    var content = document.getElementById('content');
    content.appendChild(h2);
  };
  //function to generate the amount of cookies per hour
  this.createStoreInfo = function () {
    var ul = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.innerText = hours[i] + ': ' + this.totalDailySales[i] + ' cookies';
      ul.appendChild(li);
    }
    var content = document.getElementById('content');
    content.appendChild(ul);
  };
  // create a row of data for each store
  this.createTableRow = function() {
    var table = document.getElementById('store-data');
    var tr = document.createElement('tr');
    var tBody = document.getElementById('store-body');
    var locationCell = document.createElement('td');
    tBody.appendChild(tr);
    // create table header
    var th = document.createElement('th');
    th.innerText = this.location;
    tr.appendChild(th);
    for (var i = 0; i < this.totalDailySales.length; i++) {
      var td = document.createElement('td');
      td.innerText = this.totalDailySales[i];
      tr.appendChild(td);
    }
    locationCell.innerText = this.storeTotals;
    tr.appendChild(locationCell);
  };
  // function for total cookies in a day
  // function to render data to page
  this.renderSales = function() {
    // Calculate all the cookie sales
    this.calcCookieSales();
    this.createTableRow();
  };
  locations.push(this);
};
var h1 = document.createElement ('h1');
h1.innerText = 'All Cookies Stores';
var content = document.getElementById('content');
content.appendChild(h1);
//create table
var createStoreTable = function() {
  var content = document.getElementById('content');
  var table = document.createElement('table');
  //give table an id
  table.id = 'store-data';
  //append the table to the DOM
  content.appendChild(table);
  //create a <thead> to the table
  var tHead = document.createElement('thead');
  //append <thead> to the table
  table.appendChild(tHead);

  var tBody = document.createElement('tbody');
  tBody.id = 'store-body';
  table.appendChild(tBody);

  var tr = document.createElement('tr');
  tHead.appendChild(tr);
   //create & append a <th> for ever hour
  var th = document.createElement('th');
  th.innerText = ' ';
  tr.appendChild(th);
  for (var i = 0; i < hours.length; i++) {
    var th = document.createElement('th');
    th.innerText = hours[i];
    tr.appendChild(th);
  }
  var th = document.createElement('th');
  th.innerText = 'Store Totals: ';
  tr.appendChild(th);
};
createStoreTable();

// create total cookie row
function createTotalRow() {
  var table = document.getElementById('store-data');
  var tr = document.createElement('tr');
  var tBody = document.getElementById('store-body');
  tBody.appendChild(tr);
  var th = document.createElement('th');
  th.innerText = 'Total: ';
  tr.appendChild(th);
  for (var i = 1; i < hours.length; i++) {
    var hourlySales = 0;
    var hourlyStoreTotal = 0;
    for (var j = 1; j < locations.length; j++) {
      hourlySales += locations[j].totalDailySales[i];
    }
    var td = document.createElement('td');
    td.innerText = hourlySales;
    tr.appendChild(td);
  }
};

var firstAndPike = new CookieStore('1st and Pike', 23, 65, 6.3);
var seatac = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var seattleCent = new CookieStore('Seattle Center', 11, 38, 3.7);
var capHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki', 2, 16, 4.6);

function populateTable(){
  console.log('populateTable');
  var tBody = document.getElementById('store-body');
  tBody.innerHTML = '';
  for(var i = 0; i < locations.length; i++){
    locations[i].renderSales();
  }
  createTotalRow();
}
populateTable();

//get our 'submit' and assign.
//assign user input to separate variables
//push our data to an Array,
//use that array to create a store by passing it as a new Store.

var submitForm = document.getElementById('newStoreForm');
function postForm(event) {
  event.preventDefault();
  var location = event.target[1].value;
  var minHourly = parseInt(event.target[2].value);
  var maxHourly = parseInt(event.target[3].value);
  var avgSale = parseFloat(event.target[4].value);
  var newStore = new CookieStore(location, minHourly, maxHourly, avgSale);
  newStore.renderSales();
  populateTable();
};

submitForm.addEventListener('submit', postForm);

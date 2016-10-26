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
  locations.push(this);

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
    var main = document.getElementsByTagName('main')[0];
    main.appendChild(h2);
  };
  //function to generate the amount of cookies per hour
  this.createStoreInfo = function () {
    var ul = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.innerText = hours[i] + ': ' + this.totalDailySales[i] + ' cookies';
      ul.appendChild(li);
    }
    var main = document.getElementsByTagName('main')[0];
    main.appendChild(ul);
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
};
var h1 = document.createElement ('h1');
h1.innerText = 'All Cookies Stores';
var main = document.getElementsByTagName('main')[0];
main.appendChild(h1);
//create table
var createStoreTable = function() {
  var main = document.getElementsByTagName('main')[0];
  var table = document.createElement('table');
  //give table an id
  table.id = 'store-data';
  //append the table to the DOM
  main.appendChild(table);
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

var firstAndPike = new CookieStore('1st and Pike', 23, 65, 6.3);
firstAndPike.renderSales();
var seatac = new CookieStore('SeaTac Airport', 3, 24, 1.2);
seatac.renderSales();
var seattleCent = new CookieStore('Seattle Center', 11, 38, 3.7);
seattleCent.renderSales();
var capHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
capHill.renderSales();
var alki = new CookieStore('Alki', 2, 16, 4.6);
alki.renderSales();

// create total cookie row
var createTotalRow = function() {
  var table = document.getElementById('store-data');
  var tr = document.createElement('tr');
  var tBody = document.getElementById('store-body');
  tBody.appendChild(tr);
  var th = document.createElement('th');
  th.innerText = 'Total: ';
  tr.appendChild(th);
  for (var i = 0; i < hours.length; i++) {
    var hourlySales = 0;
    var hourlyStoreTotal = 0;
    for (var j = 0; j < locations.length; j++) {
      hourlySales += locations[j].totalDailySales[i];
    }
    var td = document.createElement('td');
    td.innerText = hourlySales;
    tr.appendChild(td);
  }
};
createTotalRow();

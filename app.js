'use strict';
function randomGen (min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var firstAndPike = {
  location: '1st and Pike',
  minHourly: 23,
  maxHourly: 65,
  avgSale: 6.3,
  cookiesEachHour: [],
  custEachHour: [],
  totalDailySales: 0,
  calcRandCustPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
        this.custEachHour.push(Math.ceil(Math.random() * (this.maxHourly - this.minHourly)) + this.minHourly);
    }
  },
    calcTotalDailySales: function(){
        this.calcRandCustPerHour();
        for (var j = 0; j < hours.length; j++) {
            this.cookiesEachHour.push(Math.ceil(this.custEachHour[j] * this.avgSale));
            this.totalDailySales += this.cookiesEachHour[j];
        }
    },
    render: function() {
        this.calcTotalDailySales();
        var firstAndPikeUL = document.getElementById('first-and-pike');
        for (var i = 0; i < hours.length; i++) {
            var liEL = document.createElement('li');
            liEL.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
            firstAndPikeUL.appendChild(liEL);
        };
        var firstAndPikeTotalSales = document.createElement('li');
        firstAndPikeTotalSales.textContent = 'Total Cookies Sold Today: ' + this.totalDailySales;
        firstAndPikeUL.appendChild(firstAndPikeTotalSales);
    }
}
firstAndPike.render();

var seatac = {
  location: 'SeaTac Airport',
  minHourly: 3,
  maxHourly: 24,
  avgSale: 1.2,
  cookiesEachHour: [],
  custEachHour: [],
  totalDailySales: 0,
  calcRandCustPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
        this.custEachHour.push(Math.ceil(Math.random() * (this.maxHourly - this.minHourly)) + this.minHourly);
    }
  },
    calcTotalDailySales: function(){
        this.calcRandCustPerHour();
        for (var j = 0; j < hours.length; j++) {
            this.cookiesEachHour.push(Math.ceil(this.custEachHour[j] * this.avgSale));
            this.totalDailySales += this.cookiesEachHour[j];
        }
    },
    render: function() {
        this.calcTotalDailySales();
        var seatacUL = document.getElementById('seatac');
        for (var i = 0; i < hours.length; i++) {
            var liEL = document.createElement('li');
            liEL.textContent = hours[i] +': ' + this.cookiesEachHour[i] + ' cookies';
            seatacUL.appendChild(liEL);
        }
        var seatacTotalSales = document.createElement('li');
        seatacTotalSales.textContent = 'Total Cookies Sold Today: ' + this.totalDailySales;
        seatacUL.appendChild(seatacTotalSales);
    }
};
seatac.render();

var seattleCent = {
  location: 'Seattle Center',
  minHourly: 11,
  maxHourly: 38,
  avgSale: 3.7,
  cookiesEachHour: [],
  custEachHour: [],
  totalDailySales: 0,
  calcRandCustPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
        this.custEachHour.push(Math.ceil(Math.random() * (this.maxHourly - this.minHourly)) + this.minHourly);
    }
  },
    calcTotalDailySales: function(){
        this.calcRandCustPerHour();
        for (var j = 0; j < hours.length; j++) {
            this.cookiesEachHour.push(Math.ceil(this.custEachHour[j] * this.avgSale));
            this.totalDailySales += this.cookiesEachHour[j];
        }
    },
    render: function() {
        this.calcTotalDailySales();
        var seattleCentUL = document.getElementById('first-and-pike');
        for (var i = 0; i < hours.length; i++) {
            var liEL = document.createElement('li');
            liEL.textContent = hours[i] +': ' + this.cookiesEachHour[i] + ' cookies';
            seattleCentUL.appendChild(liEL);
        }
        var seattleCentTotalSales = document.createElement('li');
        seattleCentTotalSales.textContent = 'Total Cookies Sold Today: ' + this.totalDailySales;
        seattleCentUL.appendChild(seattleCentTotalSales);
    }
};
seattleCent.render();

var capHill = {
  location: 'Capitol Hill',
  minHourly: 20,
  maxHourly: 38,
  avgSale: 2.3,
  cookiesEachHour: [],
  custEachHour: [],
  totalDailySales: 0,
  calcRandCustPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
        this.custEachHour.push(Math.ceil(Math.random() * (this.maxHourly - this.minHourly)) + this.minHourly);
    }
  },
    calcTotalDailySales: function(){
        this.calcRandCustPerHour();
        for (var j = 0; j < hours.length; i++) {
            this.cookiesEachHour.push(Math.ceil(this.custEachHour[j] * this.avgSale));
            this.totalDailySales += this.cookiesEachHour[j];
        }
    },
    render: function() {
        this.calcTotalDailySales();
        var capHillUL = document.getElementById('first-and-pike');
        for (var i = 0; i < hours.length; i++) {
            var liEL = document.createElement('li');
            liEL.textContent = hours[i] +': ' + this.cookiesEachHour[i] + ' cookies';
            capHillUL.appendChild(liEL);
        }
        var capHillTotalSales = document.createElement('li');
        capHillTotalSales.textContent = 'Total Cookies Sold Today: ' + this.totalDailySales;
        capHillUL.appendChild(capHillTotalSales);
    }
};
capHill.render();

var alki = {
  location: 'Alki',
  minHourly: 2,
  maxHourly : 16,
  avgSale: 4.6,
  cookiesEachHour: [],
  custEachHour: [],
  totalDailySales: 0,
  salesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
        var custEachHour = RandomGen(this.minHourly, this.maxHourly);
        var cookiesEachHour = Math.round(custEachHour * this.avgSale);
        this.cookiesEachHour.push(cookiesEachHour);
        this.custEachHour.push(custEachHour);
        this.totalDailySales += cookiesEachHour;
    }
  }
};

var cookieSaleCalc = function(location){
  for (hr = 0; hr <= 15; hr++);
  var cookiesSold = location.avgCookieSale * location.custPerHour;
  cookiesSold = location.sales;
};

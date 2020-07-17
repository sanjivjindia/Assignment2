(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

    toBuyList.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
    toBuyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();

  //boughtList.removeItem = function (itemIndex) {
    //ShoppingListService.removeItem(itemIndex);
}


function ShoppingListCheckOffService() {
  var service = this;

  // Initial List of To Buy items
  var toBuyList = [];
  var item = { name:"Cookies", quantity:"10"};
  toBuyList.push(item);
  item = {name:"Soda", quantity:"5"};
  toBuyList.push(item);
  item ={name:"Tandoori Chicken", quantity:"4"};
  toBuyList.push(item);
  item = {name:"Mutton Biryani", quantity:"3"};
  toBuyList.push(item);
  item ={name:"Pizza", quantity:"2"};
  toBuyList.push(item);
  item = {name:"Roasted Cashews", quantity:"1"};
  toBuyList.push(item);
  var boughtList = [];
  service.buyItem = function (itemIndex) {
    var item = {
      name: toBuyList[itemIndex].name,
      quantity: toBuyList[itemIndex].quantity
    };
    boughtList.push(item);
    toBuyList.splice(itemIndex, 1);
  };



  service.getToBuyItems = function () {
    return toBuyList;
  };

  service.getBoughtItems = function () {
    return boughtList;
  };
}

})();

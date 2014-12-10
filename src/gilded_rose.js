// Non Mod Code base
function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

// Mod-able Code

/////////////////////////////
//// Item Quality Methods  //
/////////////////////////////

Item.prototype.increaseQuality = function(amount){
  if (this.quality < 50){
    this.quality = this.quality + amount;
  }
}

Item.prototype.decreaseQuality = function(amount){
  if (this.quality > 0) {
    this.quality = this.quality - amount;
  }
}

Item.prototype.decreaseSellIn = function() {
  this.sell_in--;
}


var items = []

var DEXTERITY_VEST = '+5 Dexterity Vest';
var AGED_BRIE = 'Aged Brie';
var ELIXIR = 'Elixir of the Mongoose';
var SULFURAS = 'Sulfuras, Hand of Ragnaros';
var BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
var CAKE = 'Conjured Mana Cake';

items.push(new Item(DEXTERITY_VEST, 10, 20));
items.push(new Item(AGED_BRIE, 2, 0));
items.push(new Item(ELIXIR, 5, 7));
items.push(new Item(SULFURAS, 0, 80));
items.push(new Item(BACKSTAGE_PASSES, 15, 20));
items.push(new Item(CAKE, 3, 6));

function updateQuality() {
  
  for (var i = 0; i < items.length; i++) {

    if(items[i].name == SULFURAS) {
      continue;
    } else if(items[i].name == BACKSTAGE_PASSES) {
      processPasses(items[i]);
    } else if(items[i].name == AGED_BRIE) {
      processBrie(items[i]);
    } else if(items[i].name == CAKE) {
      processCake(items[i]);
    } else {
      processStandardItem(items[i]);
    }
  }
};

/////////////////////////////
//// Process Items Methods //
/////////////////////////////

var processPasses = function(item){
  
  if (item.sell_in > 10) {
    console.log("inside if over 10");
    item.increaseQuality(1);
  } else if (item.sell_in <= 10 && item.sell_in > 5) {
    console.log("inside else under 10");
    item.increaseQuality(2);
  } else if (item.sell_in <= 5 && item.sell_in > 0) {
    console.log("inside else under 5");
    item.increaseQuality(3);
  } else if (item.sell_in <= 0) {
    console.log("inside else under 0");
    item.quality = 0;
  };

  item.decreaseSellIn();

};


var processBrie = function(item){
  item.increaseQuality(1);
  item.decreaseSellIn();
};

var processCake = function(item){
  item.decreaseQuality(2);
  item.decreaseSellIn();
};

var processStandardItem = function(item){
  if(item.sell_in < 1) {
    item.decreaseQuality(2);
  } else {
    item.decreaseQuality(1);
  }
  item.decreaseSellIn();
};
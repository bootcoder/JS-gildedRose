describe("Gilded Rose", function() {

	describe("item", function(){

		var item;

		beforeEach(function(){
			item = new Item("testItem", 5, 10);
		});

		it("should have a sell_in value", function() {
			expect(item.sell_in).toBe(5);
		});

		it("should have a name", function() {
			expect(item.name).toBe("testItem");
		});

		it("should have a quality", function() {
			expect(item.quality).toBe(10);
		});

	});

	describe("updateQuality", function() {
		
		beforeEach(function(){
			items = [];
			items.push(new Item('Test Dexterity Vest', 10, 20));
			items.push(new Item('Aged Brie', 2, 0));
			items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
			items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));

		});

		describe("updating the quality for basic items", function(){


			it("should lower sell_in value upon execution", function() {
				var testItemSellIn = items[0].sell_in;
				updateQuality();
				expect(items[0].sell_in).toBeLessThan(testItemSellIn);
			});

			it("should lower the quality upon execution", function() {
				var testItemQuality = items[0].quality;
				updateQuality();
				expect(items[0].quality).toBeLessThan(testItemQuality);
			});

			it("should degrade quality at 2x rate when sell_in reaches ZERO", function(){
				items[0].sell_in = 0;
				var testQuality = items[0].quality;
				updateQuality();
				expect(items[0].quality).toBe(testQuality-2);
			});

			it("should never have a quality with a negative value", function(){
				items[0].quality = 0;
				updateQuality();
				expect(items[0].quality).toBe(0);
			});
		  
		});

		describe("Updating Quality for Brie", function(){

		  // - "Aged Brie" actually increases in *quality* the older it gets
			it("increases in quality with each invocation of updateQuality", function(){
				var brieQuality = items[1].quality;
				updateQuality();
				expect(items[1].quality).toBe(brieQuality+1);
			});

		  // - The *quality* of an item is never more than 50
		  it("should never have a quality more than 50", function(){
		  	items[1].quality = 50;
		  	updateQuality();
		  	expect(items[1].quality).toBe(50);
		  });

		});

		describe("Updating the quality for Sulfuras", function(){

			// - "Sulfuras", being a legendary item, never has to be sold nor does it decrease in *quality*
			it("never decreases in quality", function(){
				var sulfurasQuality = items[2].quality;
				updateQuality();
				expect(items[2].quality).toBe(sulfurasQuality);
			});

			it("is not affected by sell_in value", function(){
				var sulfurasSellIn = items[2].sell_in;
				updateQuality();
				expect(items[2].sell_in).toBe(sulfurasSellIn);
			});

		});

		describe("Updating the quality of Backstage Passes", function(){

			// - "Backstage passes", like aged brie, increases in *quality* as it's *sell_in*
			//     value decreases; *quality* increases by 2 when there are 10 days or less
			//     and by 3 when there are 5 days or less but *quality* drops to 0 after the
			//     concert

			it("quality increases by 1 when sell_in is > 10", function(){
				items[3].sell_in = 11;
				var passesQuality = items[3].quality;
				updateQuality();
				expect(items[3].quality).toBe(passesQuality+1);
			});

			it("quality increases by 2 when sell_in is < 10 > 5", function(){
				items[3].sell_in = 6;
				var passesQuality = items[3].quality;
				updateQuality();
				expect(items[3].quality).toBe(passesQuality+2);
			});


			it("quality increases by 3 when sell_in is < 5", function(){
				items[3].sell_in = 1;
				var passesQuality = items[3].quality;
				updateQuality();
				expect(items[3].quality).toBe(passesQuality+3);
			});


			it("quality reduces to 0 when sell_in < 0", function(){
				items[3].sell_in = 0;
				var passesQuality = items[3].quality;
				updateQuality();
				console.log(items[3].sell_in);
				expect(items[3].quality).toBe(0);
			});

		});


	});

});



// 



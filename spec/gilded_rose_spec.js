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
		
		describe("updating the quality for basic items", function(){

			beforeEach(function(){
				items = [];
				items.push(new Item('Test Dexterity Vest', 10, 20));
			});

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

		});

		// describe("updating the quality of ")

	});

});



// 



describe("Gilded Rose", function() {

	describe("item", function(){
		it("should have a sell_in value", function() {
			var item = new Item("testItem", 5, 10);
			expect(item.sell_in).toBe(5);
		})
		it("should have a name", function() {
			var item = new Item("testItem", 5, 10);
			expect(item.name).toBe("testItem");
		})
		it("should have a quality", function() {
			var item = new Item("testItem", 5, 10);
			expect(item.quality).toBe(10);
		})
	});

});


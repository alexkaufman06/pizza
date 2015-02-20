describe("Pizza", function() {
  describe("price()", function() {
    it("returns the base price of cooking a pizza", function() {
      var testPizza = Object.create(Pizza);
      expect(testPizza.price()).to.equal(5);
    });

    it("returns the price of a 12 inch pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 12;
      expect(testPizza.price()).to.equal(14);
    });

    it("returns the price of a 14 inch pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 14;
      expect(testPizza.price()).to.equal(16);
    });
  });
});

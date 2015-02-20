describe("Pizza", function() {
  describe("price()", function() {
    it("returns the base price of cooking a pizza", function() {
      var testPizza = Object.create(Pizza);
      expect(testPizza.price()).to.equal(1);
    });

    it("returns the price of a 5 inch pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 5;
      expect(testPizza.price()).to.equal(3);
    });
  });
});

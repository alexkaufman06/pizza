describe("Pizza", function() {
  describe("price()", function() {
    it("returns the base price of cooking a pizza", function() {
      var testPizza = Object.create(Pizza);
      expect(testPizza.basePrice).to.equal(1);
    });
  });
});

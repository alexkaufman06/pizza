describe("Pizza", function() {
  describe("price()", function() {
    it("returns the base price of cooking a pizza", function() {
      var testPizza = Object.create(Pizza);
      expect(testPizza.price()).to.equal(5);
    });

    it("returns the price of a 8-12 inch pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 12;
      expect(testPizza.price()).to.equal(14);
    });

    it("returns the price of a 13-14 inch pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 14;
      expect(testPizza.price()).to.equal(16);
    });

    it("returns the price of a 15-16 inch pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 16;
      expect(testPizza.price()).to.equal(18);
    });

    it("returns the price of a 17-18 inch pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 18;
      expect(testPizza.price()).to.equal(20);
    });

    it("returns the additional price for ordering a pepperoni pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 18;
      testPizza.type = "pepperoni";
      expect(testPizza.price()).to.equal(22);
    });
  });
});

var Pizza = {
  basePrice: 5,
  toppings: ["pepperoni", "chicken"],
  price: function() {
    if (this.size <= 12) {
      this.basePrice += 9;
    } else if (this.size <= 14 && this.size > 12) {
      this.basePrice += 11;
    } else if (this.size <= 16 && this.size > 14) {
      this.basePrice += 13;
    } else if (this.size <= 18 && this.size > 16) {
      this.basePrice += 15;
    }

    if (this.toppings.indexOf(this.type) !== -1) {
      this.basePrice += 2;
    }
  return this.basePrice;
  }
};

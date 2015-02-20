var Pizza = {
  basePrice: 1,
  price: function() {
    if (this.size === 5) {
      this.basePrice += 2;
    }
  return this.basePrice;
  }
};

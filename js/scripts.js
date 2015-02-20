var Pizza = {
  basePrice: 5,
  price: function() {
    if (this.size === 12) {
      this.basePrice += 9;
    } else if (this.size === 14) {
      this.basePrice += 11;
    }
  return this.basePrice;
  }
};

var sellingPrice = 199
var listingPrice = 799

var discountPercent = ((listingPrice - sellingPrice)/listingPrice) * 100 //percentage formula

console.log("Discount percentage is : " + discountPercent);

displayDiscountPercentage = Math.round(discountPercent) //rounding function

console.log(displayDiscountPercentage + " % off");
// array representing shopping cart with item details
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// filter only items that are currently in stock
let inStock = cart.filter(function(i){
    return i.inStock == true;
});
console.log("items in stock are: ", inStock);

// create new array containing only name and price of each item
let newii = cart.map(function(i){
  return {
    name: i.name,
    price: i.price
  }
});
console.log("item names and prices are: ", newii);

// calculate total cart value considering price and quantity
let total = cart.reduce(function(acc, el){
  return acc + el.price * el.quantity;
}, 0);
console.log("total cart value is: ", total);

// find the item whose name is Mouse
let fin = cart.find(function(i){
  return i.name == "Mouse";
});
console.log("item with name mouse is: ", fin);

// find index position of item named Keyboard
let findin = cart.findIndex(function(i){
  return i.name == "Keyboard";
});
console.log("index of item with name keyboard is: ", findin);


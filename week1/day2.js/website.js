const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
let inStock=cart.filter(function(i){
    return i.inStock==true;
})
console.log("items in stock are: ",inStock);
let newii=cart.map(function(i){
  return {
    name:i.name,
    price:i.price
  }
});
console.log("item names and prices are: ",newii);
let total=cart.reduce(function(acc,el){
  return acc+el.price*el.quantity;
},0);
console.log("total cart value is: ",total);
let fin=cart.find(function(i){
  return i.name=="Mouse";
});
console.log("item with name mouse is: ",fin);
let findin=cart.findIndex(function(i){
  return i.name=="Keyboard";
});
console.log("index of item with name keyboard is: ",findin);

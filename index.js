const userInput = prompt("Enter your froyo order").split(",");
//const orderArray = userInput.split(",");

function tallyOrder(orderArray) {
  const orderList = {};
  for (item of userInput) {
    if (item in orderList) {
      orderList[item] += 1;
    } else {
      orderList[item] = 1;
    }
  }
  return orderList;
  //display order in table
}
console.log(tallyOrder(userInput));

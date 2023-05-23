// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


// given array price // current element prices[i] = current index
// profit => max profit 
// return the max profit . if not return 0

// min price  
// max profit
// profit
// current element - min price

function buyAndSell(prices){
     let minPrice = Infinity; // Initialize minimum price to a very large value
  let maxProfit = 0; // Initialize maximum profit to 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]; // Update minimum price if a smaller price is found
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice; // Update maximum profit if a larger profit is obtained
    }
  }

  return maxProfit;

}


console.log(buyAndSell([7,1,5,3,6,4]))
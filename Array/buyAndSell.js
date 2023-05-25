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
     let min_price = Infinity;
     let max_price = 0;
     for(let i = 0 ; i < prices.length; i++){
          if( prices[i] < min_price){
               min_price = prices[i];
          }
          else if(prices[i] - min_price > max_price){
               max_price = prices[i] - min_price;
          }
     }

      return max_price;

}


console.log(buyAndSell([7,1,5,3,6,4]))
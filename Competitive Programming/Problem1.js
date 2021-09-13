var stock_prices = [10,7,6,5,4,3]

function findprofit(stock_prices){

    if(stock_prices.length < 2){
        throw Error("no changes at least two values are required")
    }

    var minPrice = stock_prices[0]
    var maxprofix = stock_prices[1] - stock_prices[0]



    stock_prices.slice(1).forEach((current_price, index)=>{
        potential_profit = current_price - minPrice
        maxprofix = Math.max(maxprofix, potential_profit)
        minPrice = Math.min(minPrice, current_price)
    })

    return maxprofix
}

console.log(findprofit(stock_prices))
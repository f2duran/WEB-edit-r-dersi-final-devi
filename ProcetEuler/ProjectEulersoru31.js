
var COINS = [1, 2, 5, 10, 20, 50, 100, 200];

function ways(sum) {
    var memo = [];
    for (var i = 0; i <= sum; i++) {
        memo[i] = 0;
    }
    memo[0] = 1;
    for (i = 0; i < COINS.length; i++) {
        for (var j = COINS[i]; j <= sum; j++) {
            memo[j] += memo[j - COINS[i]];
        }
    }
    return memo[sum];
}

console.log( ways(200) );

let calorieInput = `


`

let currentCount = 0;
let greatestCaloricCount = secondGreatestCaloricCount = thirdGreatestCaloricCount = 0;

var lineBreak = '\n';
var i = j = 0;
while ((j = calorieInput.indexOf(lineBreak, i)) !== -1) {
    let currentCaloricValue = calorieInput.substring(i,j)
    if (!currentCaloricValue || currentCaloricValue.length === 0) {
        currentCount += parseInt(currentCaloricValue)
    }
    else
    {
        if(greatestCaloricCount < currentCount)
        {
            thirdGreatestCaloricCount = secondGreatestCaloricCount
            secondGreatestCaloricCount = greatestCaloricCount
            greatestCaloricCount = currentCount
        }
        else if(secondGreatestCaloricCount < currentCount)
        {
            thirdGreatestCaloricCount = secondGreatestCaloricCount
            secondGreatestCaloricCount = currentCount
        }
        else if(thirdGreatestCaloricCount < currentCount)
        {
            thirdGreatestCaloricCount = currentCount
        }
        currentCount = 0
    }
    i = j + 1;
}
console.log(greatestCaloricCount + secondGreatestCaloricCount + thirdGreatestCaloricCount)
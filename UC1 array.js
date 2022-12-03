//Write a program in the following steps
let randomNum = new Array()

//a. Generates 10 Random 3 Digit number.

for(let i = 0; i < 10; i++)
{    
    randomNum.push(Math.floor(Math.random()*900)+100)
}

let maxValue = randomNum[0];
let minValue = randomNum[0];

for(let i =1; i < 10; i++ )
{
    if(maxValue < randomNum[i])
    {
        maxValue = randomNum[i];
    }

    if(minValue > randomNum[i])
    {
        minValue = randomNum[i];
    }
}

console.log('The Maximum value is: ', maxValue)
console.log('The Minimum value is: ', minValue)
//b. Store this random numbers into a array.
//c. Then find the 2nd largest and the 2nd smallest element without sorting the array.//
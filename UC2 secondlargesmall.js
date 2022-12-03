//program to sort the array and then find the 2nd largest and the 2nd smallest element.
let randomNum = new Array()

for(let i = 0; i < 10; i++)
{    
    randomNum.push(Math.floor(Math.random()*900)+100)
}
console.log(randomNum)
let maxValue = randomNum[0];
let minValue = randomNum[0];

for(let i =0; i < 9; i++ )
{
    for(let j = i+1; j<10;j++)
    {
        if(randomNum[i] > randomNum[j])
        {
        let temp = randomNum[i];
        randomNum[i] = randomNum[j];
        randomNum[j] = temp;
        }
    }
    
}
console.log(randomNum)
console.log('The Maximum value is: ', randomNum[8])
console.log('The Minimum value is: ', randomNum[1])
//Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array

let twiceDigit = new Array()

for(let i=0; i < 100; i++)
{
    if(i == 0) {}
    else
    {
        if(i % 11 == 0)
        {
            twiceDigit.push(i)
        }   
    }
    
}

console.log(twiceDigit)
const input = prompt('Введите число', '')
const num = Number(input)
let result

if (num > 0)
    result = 1
else if(num < 0)    
    result = -1
else if(num == 0)   
    result = 0

alert(result)    
const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
console.log(topSalary(salaries));
  
function topSalary(salaries) {
    let entries = Object.entries(salaries);
    if (entries.length == 0)
        return null;

    let maxSum = 0
    let name = Object.entries(salaries)[0].key
    for (let [key, value] of entries) {
        if (value > maxSum) {
        maxSum = value;
        name = key
        }
    }

    return name
}
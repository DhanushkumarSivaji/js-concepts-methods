const divisibleBy = (numbers,divisor) => numbers.filter((num) => num % divisor === 0)

console.log(divisibleBy([12,34,54,65,23,5566,3,12,54,31324556,354,4645345],5))
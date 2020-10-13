function sortByLength(arr){
    return arr.sort((a,b)=>a.length - b.length)
}

let array = ["Dhanush kumar","Sivaji","Vasanthi Sivaji","Divya SenthilRaj","Sachin SenthilRaj"]

console.log(sortByLength(array))
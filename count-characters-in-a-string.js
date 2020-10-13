function countString(str){
    let count = {}
    str.split('').forEach((char)=>{
        count[char] = count[char] ? count[char] + 1 : 1;
    })
    return count
}
console.log(countString("dhanushkumarsivaji"))
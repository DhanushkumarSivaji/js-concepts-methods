function maskify(cc){
    return cc.split('').map((letter,i)=> i < cc.length - 4 ? "#" : letter).join('');
}

console.log(maskify("33337271678"))
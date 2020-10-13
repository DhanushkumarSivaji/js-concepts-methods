function alterCase(str) {
    return str.split('').map(changeCase).join('');
}

function changeCase(char) {
    return char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase()
}

console.log(alterCase('DhAnUsH'));
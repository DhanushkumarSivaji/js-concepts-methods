const removeDuplicates = (str) => [...new Set(str.split(' '))].join(' ')

console.log(removeDuplicates("aplha beta beta gamma alpha alpha radis"))
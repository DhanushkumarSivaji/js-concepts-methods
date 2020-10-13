const countries = ['Norway', 'Sweden', 'Denmark', 'New Zealand'];

function firstN(item) {
  return item.toLowerCase().indexOf('n') === 0;
}

let startsWithN = countries.filter(firstN);

console.log(startsWithN)
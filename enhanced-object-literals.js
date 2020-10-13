// const color = 'red';

// const Car = {
//   color: color,
//   drive: function() {
//     return 'Vroom!';
//   },
//   getColor: function() {
//     return this.color;
//   }
// };

const color = 'red';

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};
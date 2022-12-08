//Question1: Check the speed difference among the following loops: while, for, for of, forEach
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

//while
console.time("while");
i = 0;
while (i < countries.length) {
  console.log(countries[i][0]);
  i++;
}
console.timeEnd("while");

//for
console.time("for");

for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0]);
}
console.timeEnd("for");

//for of
console.time("for of");

for (let i of countries) {
  console.log(i[0]);
}
console.timeEnd("for of");

//forEach
console.time("forEach");

countries.forEach((j) => console.log(j[0]));

console.time("forEach");

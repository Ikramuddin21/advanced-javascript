const students = [
    {id: 5, name: "Sakib"},
    {id: 6, name: "Tamim"},
    {id: 10, name: "Taskin"},
    {id: 15, name: "Afridi"}
];
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter( s => s.id > 9);
const biggerOne = students.find(s => s.id > 9);
console.log(biggerOne);
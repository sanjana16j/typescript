//Basic Types
var id = 5;
console.log('ID : ', id);
var company = 'tetherfi';
var isPublished = true;
var x = 'Hello';
var ids = [1, 2, 3, 4, 5];
//tuple
var person = [101, 'Sanjana', true];
//tuple array
var employee;
employee = [
    [1, 'Priya'],
    [2, 'Jnan'],
    [3, 'Sush']
];
//union
var pid;
//enum
var directions;
(function (directions) {
    directions[directions["up"] = 0] = "up";
    directions[directions["down"] = 1] = "down";
    directions[directions["left"] = 2] = "left";
    directions[directions["right"] = 3] = "right";
})(directions || (directions = {}));
console.log(directions.left);
var user = {
    id: 1,
    name: 'Sanjana'
};
console.log(user.id + " ", user.name);

//Basic Types
let id : number=5
console.log('ID : ',id)
let company : string='tetherfi'
let isPublished : boolean=true
let x : any='Hello'
let ids : number[]=[1,2,3,4,5]
//tuple
let person : [number,string,boolean]=[101,'Sanjana',true]
//tuple array
let employee:[number,string][];
employee=[
    [1,'Priya'],
    [2,'Jnan'],
    [3,'Sush']
];

//union
let pid: string | number;

//enum
enum directions{
    up,down,left,right
}
console.log(directions.left)
 
//Objects
type User={
    id:number
    name:string
}
const user:User={
    id:1,
    name:'Sanjana'
}
console.log(user.id+" ",user.name)
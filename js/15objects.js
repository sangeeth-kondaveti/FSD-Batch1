var a = {}; // object
var b = []; //array

var movieName = "Avengers";
var movieRating = 5;
var movieType = "Action";

var movieName1 = "Frozen";
var movieRating1 = 4.5;
var movieType1 = "Animation";

//object - {key: value}
var movie = {
  name: "Avengers",
  rating: 5,
  type: "Action",
};
console.log(typeof movie); //object
//dot notation - object.key

console.log(movie.name); //Avengers
console.log(movie.type); //Action
console.log(movie.rating); // 5
console.log(movie);
//{name: 'Avengers', rating: 5, type: 'Action'}

//bracket notation - []
console.log(movie["name"]); //Avengers
console.log(movie["rating"]); // 5

var movie = {
  name: "Avengers",
  rating: 5,
  type: "Action",
};

for (key in movie) {
  console.log(key);
}
//name
//rating
//type

for (key in movie) {
  console.log(movie[key]); // movie['name], movie['rating]
}
//Avengers
//5
//Action

//Array of objects
var movie = [
  {
    name: "Avengers",
    rating: 5,
    type: "Action",
  },
  {
    name: "Frozen",
    rating: 4.5,
    type: "Animation",
  },
];

//   JSON  - Javascript Object Notation -  format(Array of objects - {"key": "value"})
//   API  - Application Program Interface

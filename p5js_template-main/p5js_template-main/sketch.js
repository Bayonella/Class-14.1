var Student={
  name:"Shane",
  class:9,
  role_number:3482,
  favorite_subject:"Chemistry"
};
function setup() {
  createCanvas(400, 400);
  console.log(Student.name);
  console.log(Student);
}

function draw() {
  background(220);
}
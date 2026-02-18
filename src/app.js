import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
    let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  for (let i = 0; i <pronoun.length; i++){
for (let index = 0; index < adj.length; index++){
for (let nu = 0; nu < noun.length; nu++){
  console.log(pronoun[i] + adj[index] + noun[nu]+ ".com");
}
  }
}
 
  console.log("Hello Rigo from the console!");
};

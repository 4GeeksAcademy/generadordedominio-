function dominio(){
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

for (let index = 0; index < adj.length; index++){
  for (let i = 0; i < pronoun.length; i++){
    for (let indice = 0; indice < noun.length; indice++){
      console.log(pronoun[i] + adj[index] + noun[indice] + ".com");
    }
  }
}
}
dominio()

const pokemon = require('./data.js');
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

// inspecting the pokemon array
// console.dir(pokemon, { maxArrayLength: null })


/* log JUST the name of the Pokemon with the number 59
   using the index of the Pokemon in the array
*/
console.log(pokemon[58].name);


// inspect game object
// console.log(game);

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = 'Med';

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

// first find out which pokemon are starters
// for (let i = 0; i < pokemon.length; i++) {
//     if (pokemon[i].starter === true) {
//         console.log(pokemon[i].name);
//     }
// }

/* output:
Arcanine
Bulbasaur
Charmander
Squirtle
Pikachu
*/

// adding Pikachu to the party
game.party.push('Pikachu');

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

/*
want to look at pokemon that are EITHER not starter, not electric since we already have pikachu,
not bug because they're generally weak(my bias), AND all be tanky with hp above 100
*/
// pokemon.forEach(p => {
//     switch(true) {
//         case ((p.starter === false ||
//             p.type !== 'electric' ||
//             p.type !== 'bug') &&
//             p.hp > 100):
//                 console.log(`name: ${p.name}, type: ${p.type}, hp: ${p.hp}`);
//     }
// })

/* ouput:
name: Jigglypuff, type: normal, hp: 115
name: Wigglytuff, type: normal, hp: 140
name: Muk, type: poison, hp: 105
name: Rhydon, type: ground, hp: 105
name: Chansey, type: normal, hp: 250
name: Kangaskhan, type: normal, hp: 105
name: Lapras, type: water, hp: 130
name: Jolteon, type: electric, hp: 130
name: Snorlax, type: normal, hp: 160
name: Mewtwo, type: psychic, hp: 106
*/

// adding MewTwo, Rhydon, and Snorlax!
game.party.push['MewTwo', 'Rhydon', 'Snorlax'];



  
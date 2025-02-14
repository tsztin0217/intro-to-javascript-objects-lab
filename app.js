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
game.party.push('MewTwo', 'Rhydon', 'Snorlax');

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

// loop through gyms array
for (const gym of game.gyms) {
    if (gym.difficulty < 3) {
        gym.completed = true;
    }
}


/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

game.party.splice(0, 1, 'Raichu');
console.log(game);


/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

// // alternative using array method
// game.party.forEach(function(member) {
//     console.log(member); 
// });

for (const member of game.party) {
    console.log(member);
}



/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].starter === true) {
        console.log(pokemon[i].name);
    }
}


/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

game.catchPokemon = function(pokemonObj) {
    game.party.push(pokemonObj);
}

game.catchPokemon('Eevee');

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

game.catchPokemon = function(pokemonObj) {
    game.party.push(pokemonObj);
    game.items[1].quantity -= 1;
}

game.catchPokemon('Vulpix');

console.log(game.items);
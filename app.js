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



/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

for (const gym of game.gyms) {
    if (gym.difficulty < 6) {
        gym.completed = true;
    }
}

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

game.gymStatus = function() {
   const gymTally = {
        completed: 0,
        incomplete: 0
    };
    for (const gym of this.gyms) {
        if (gym.completed === true) {
            gymTally.completed +=1;
        } else {
            gymTally.incomplete +=1;
        }
    }
    console.log(gymTally);
}

game.gymStatus();


/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

game.partyCount = function() {
    return this.party.length;
}


/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

for (const gym of game.gyms) {
    if (gym.difficulty < 8) {
        gym.completed = true;
    }
}


/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/
console.log(game);


/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort  

// set up a function so later can use this to look up info
// input name from game.party and look up its hp from pokemon data
function getPokemonDataByName(name) {
    // Loop through the pokemon array and return the first match
    for (let i = 0; i < pokemon.length; i++) {
      if (pokemon[i].name.toLowerCase() === name.toLowerCase()) {
        return pokemon[i];
      }
    }
   
}
// sort the game.party based on HP (descending order) using map()
function sortPartyByHP() {
    // create an array with pokemon names and hp
    const partyWithHP = game.party.map(pokemonName => {
      const pokemonData = getPokemonDataByName(pokemonName);
      return { name: pokemonName, hp: pokemonData.hp };
    });
  
    // sort the array by HP in descending order
    partyWithHP.sort((a, b) => b.hp - a.hp);
  
    // map the sorted Pokémon data back into the party names
    game.party = partyWithHP.map(pokemon => pokemon.name);
  
    console.log('Sorted Party:', game.party);
}

sortPartyByHP();


/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/
game.collection  = [];

game.catchPokemon = function(pokemonObj) {
    if (game.party.length < 6) {
        game.party.push(pokemonObj);
    } else {
        game.collection.push(pokemonObj);
    }
    game.items[1].quantity -= 1;
}

game.catchPokemon('Gloom');
console.log(game.items);


/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

game.catchPokemon = function(pokemonObj) {
    if (game.items[1].quantity <= 0) {
        console.log(`Not enough pokeballs to catch ${pokemonObj}.`)
    } else {
        if (game.party.length < 6) {
            game.party.push(pokemonObj);
        } else {
            game.collection.push(pokemonObj);
        }
    game.items[1].quantity -= 1;
    }
}


/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. 
Modify is so that you can just pass in the name of a Pokemon instead of an entire object, 
and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, 
if the string 'PiKacHU' is passed to the function, 
it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. 
Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, 
and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/

game.catchPokemon = function(pokemonName) {
    let pokemonObj;
    for (let i = 0; i < pokemon.length; i++) {
        if (pokemon[i].name.toLowerCase() === pokemonName.toLowerCase()) {
            pokemonObj = pokemon[i];
        }
    }

    if (!pokemonObj) {
        return `The selected Pokemon ${pokemonName} does not exist.`;
    }

    if (game.items[1].quantity <= 0) {
        return `Not enough pokeballs to catch ${pokemonObj.name}.`; 
    } else {
        if (game.party.length < 6) {
            game.party.push(pokemonObj);
            game.items[1].quantity -= 1; 
            return `${pokemonObj.name} was caught and added to your party.`;
        } else {
            game.collection.push(pokemonObj);
            game.items[1].quantity -= 1; //
            return `${pokemonObj.name} was caught and added to your collection.`;
        }
    }
}

console.log(game.catchPokemon('PiKacHU'));  



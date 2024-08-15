#!/usr/bin/env node
//hasbang or shebang

// const printFiveMoves=async(pokemonName)=>{
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//     const pokemon = await response.json();
//     const moves = pokemon.moves.map(({move})=>move.name);
//     console.log(moves.slice(0, 5));
// };

// printFiveMoves("ditto");

/*---------Interactive method 1-------------*/

// const yargs = require("yargs");
// const {argv} = yargs(process.argv);

// const printFiveMoves=async(pokemonName)=>{
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//     const pokemon = await response.json();
//     const moves = pokemon.moves.map(({move})=>move.name);
//     console.log(moves.slice(0, 5));
// };

// printFiveMoves(argv.pokemon);

/*---------Interactive method 2 (option 2)-------------*/

// const inquirer = require("inquirer");

// const printFiveMoves=async(pokemonName)=>{
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//     const pokemon = await response.json();
//     const moves = pokemon.moves.map(({move})=>move.name);
//     console.log(moves.slice(0, 5));
// };

// const prompt = inquirer.createPromptModule();
// prompt([
//     {
//         type:"input",
//         name:"userPokemon",
//         message:"Type your pokemon"
//     }
// ]).then((answers)=>{
//     const userAnswer=answers.userPokemon;
//     printFiveMoves(userAnswer);
// });


/*---------Interactive method 2 (option 2)-------------*/

const inquirer = require("inquirer");

const printFiveMoves=async(pokemonName)=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemon = await response.json();
    const moves = pokemon.moves.map(({move})=>move.name);
    console.log(moves.slice(0, 5));
};

inquirer
  .prompt([
    {
      type: "input",
      name: "userPokemon",
      message: "Type your Pokémon",
    },
  ])
  .then((answers) => {
    const userAnswer = answers.userPokemon;
    printFiveMoves(userAnswer);
  });
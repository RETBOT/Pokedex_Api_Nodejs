const express = require("express");
const PokemonController = require("../controllers/pokemon");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();
// Registro pokemon
api.post("/pokedex/register", [md_auth.asureAuth], PokemonController.register);

// Todos los pokemon
api.get("/pokedex", PokemonController.getPokemons)

// Pokemon
api.get("/pokedex/:id", PokemonController.getPokemon);

// Actualizar Pokemon
api.patch("/pokedex/:id", [md_auth.asureAuth], PokemonController.updatePokemon);

// Eliminar usuarios
api.delete("/pokedex/:id", [md_auth.asureAuth], PokemonController.deletPokemon);
module.exports = api;
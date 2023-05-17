const express = require("express");
const PokemonController = require("../controllers/pokemon");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();
// Registro pokemon
api.post("/pokedex/register", [md_auth.asureAuth], PokemonController.register);

// Todos los pokemon
api.get("/pokedex", PokemonController.getPokemons);

// Pokemon
api.get("/pokedex/id/:id", PokemonController.getPokemon);

// Pokemon Tipo
api.get("/pokedex/type/:type", PokemonController.getPokemonByType);

// Pokemon debilidad weakness
api.get("/pokedex/weakness/:weakness", PokemonController.getPokemonByWeakness);

// Actualizar Pokemon
api.patch("/pokedex/update/:id", [md_auth.asureAuth], PokemonController.updatePokemon);

// Eliminar usuarios
api.delete("/pokedex/delete/:id", [md_auth.asureAuth], PokemonController.deletPokemon);

module.exports = api;
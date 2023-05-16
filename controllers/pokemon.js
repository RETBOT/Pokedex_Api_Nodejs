const Pokemon = require("../models/pokemon");

// Registro de pokemon 
function register(req, res) {
    const {
        _id, url, name, image, descripcionversionx, descripcionversiony,
        altura, categoria, peso, habilidad, sexo, tipo, debilidad, puntosbase, evoluciones } = req.body;

    if (!_id) res.status(400).send({ msg: "El id es obligatorio" });

    const pokemon = new Pokemon({
        _id,
        url,
        name,
        image,
        descripcionversionx,
        descripcionversiony,
        altura,
        categoria,
        peso,
        habilidad,
        sexo,
        tipo,
        debilidad,
        puntosbase: {
            ps: puntosbase.ps,
            ataque: puntosbase.ataque,
            defensa: puntosbase.defensa,
            ataqueespecial: puntosbase.ataqueespecial,
            defensaespecial: puntosbase.defensaespecial,
            velocidad: puntosbase.velocidad,
        },
        evoluciones
    });

    pokemon.save((error, pokemonStorage) => {
        if (error) {
            res.status(400).send({ msg: "Error al crear el pokemon" });
        } else {
            res.status(200).send(pokemonStorage);
        }
    });
}

// Ver todos los pokemones
async function getPokemons(req, res) {
    res.status(200).send(await User.find());
}

// Un pokemon
async function getPokemon(req, res) {
    const { pokemon_id } = req.user;
    const response = await User.findById(pokemon_id);

    if (!response) {
        res.status(400).send({ msg: "No se ha encontrado pokemon" });
    } else {
        res.status(200).send(response);
    }
}

// Actualizar Pokemon
async function updatePokemon(req, res) {
    const { id } = req.params;
    const pokemonData = req.body;

    User.findByIdAndUpdate({ _id: id }, pokemonData, (error) => {
        if (error) res.status(400).send({ msg: "Error al actualizar el pokemon" });
        else res.status(200).send({ msg: "Actualización correcta" });

    });
}

// Eliminar Pokemon
async function deletPokemon(req, res) {
    const { id } = req.params;
    User.findByIdAndDelete(id, (error) => {
        if (error) {
            res.status(400).send({ msg: "Error al eliminar el pokemon" });
        } else {
            res.status(200).send({ msg: "Pokemon eliminado" });
        }
    })
}

module.exports = {
    register,
    getPokemons,
    getPokemon,
    updatePokemon,
    deletPokemon,
};
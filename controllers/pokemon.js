const Pokemon = require("../models/pokemon");

// Registro de pokemon 
function register(req, res) {
    const {
        _id, numero, url, name, image, descripcionversionx, descripcionversiony,
        altura, categoria, peso, habilidad, sexo, tipo, debilidad, puntosbase, evoluciones } = req.body;

    if (!_id) res.status(400).send({ msg: "El id es obligatorio" });

    const pokemon = new Pokemon({
        _id,
        url,
        numero,
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
    const { page = 1, limit = 10 } = req.query;
    const options = {
        page: parseInt(page),
        limit: parseInt(limit)
    };

    Pokemon.paginate({}, options, (error, courses) => {
        if (error) res.status(400).send({ msg: "Error al obtener los cursos" });
        else res.status(200).send(courses);
    });
}

// Un pokemon
async function getPokemon(req, res) {
    try {
        const { id } = req.params;
        const pokemon = await Pokemon.findById(id);

        if (!pokemon) {
            return res.status(404).send({ msg: `No se ha encontrado el pokémon con id: ${id}` });
        }

        res.status(200).send(pokemon);
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Error interno del servidor" });
    }
}


// Actualizar Pokemon
async function updatePokemon(req, res) {
    const { id } = req.params;
    const pokemonData = req.body;

    Pokemon.findByIdAndUpdate({ _id: id }, pokemonData, (error) => {
        if (error) res.status(400).send({ msg: "Error al actualizar el pokemon" });
        else res.status(200).send({ msg: "Actualización correcta" });

    });
}

// Eliminar Pokemon
async function deletPokemon(req, res) {
    const { id } = req.params;
    Pokemon.findByIdAndDelete(id, (error) => {
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
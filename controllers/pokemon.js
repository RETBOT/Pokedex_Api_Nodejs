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
        if (error) res.status(400).send({ msg: "Error al obtener los pokemon" });
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

// Pokemon por tipo
async function getPokemonByType(req, res) {
    try {
        const { type } = req.params;
        const types = type.split("&").map(t => new RegExp(`^${t.trim()}$`, "i")); // Separar los tipos en un array y generar expresiones regulares insensibles a mayúsculas/minúsculas

        const pokemons = await Pokemon.find({
            $or: [
                { tipo: { $in: types } }, // Buscar por tipos combinados
                { tipo: { $regex: new RegExp(`\\b${type.replace("&", "|").trim()}\\b`, "i") } }, // Buscar por palabra específica en el tipo
            ]
        });

        if (pokemons.length === 0) {
            return res.status(404).send({ msg: "No se han encontrado Pokémones de esos tipos" });
        }

        res.status(200).send(pokemons);
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Error interno del servidor" });
    }
}

// Debilidad
async function getPokemonByWeakness(req, res) {
    try {
        const { weakness } = req.params;
        const weaknesses = weakness.split("&").map(w => w.trim());

        const pokemons = await Pokemon.find({ debilidad: { $in: weaknesses.map(w => new RegExp(`\\b${w}\\b`, "i")) } });

        if (pokemons.length === 0) {
            return res.status(404).send({ msg: "No se han encontrado pokémones con esas debilidades" });
        }

        res.status(200).send(pokemons);
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Error interno del servidor" });
    }
}

// Categoria
async function getPokemonByCategory(req, res) {
    try {
        const { category } = req.params;

        const regex = new RegExp(`^${category}$`, "i"); // Expresión regular para buscar coincidencias exactas, sin distinguir mayúsculas/minúsculas

        const pokemons = await Pokemon.find({ categoria: regex });

        if (pokemons.length === 0) {
            return res.status(404).send({ msg: `No se han encontrado pokémones en la categoría: ${category}` });
        }

        res.status(200).send(pokemons);
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
    getPokemonByType,
    getPokemonByWeakness,
    getPokemonByCategory,
    updatePokemon,
    deletPokemon,
};

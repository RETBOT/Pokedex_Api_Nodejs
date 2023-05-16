
const mongoose = require("mongoose");

const PokemonSchema = mongoose.Schema({
    _id: String,
    url: String,
    name: String,
    image: String,
    descripcionversionx: String,
    descripcionversiony: String,
    altura: String,
    categoria: String,
    peso: String,
    habilidad: String,
    sexo: String,
    tipo: String,
    debilidad: String,
    puntosbase: {
        ps: Number,
        ataque: Number,
        defensa: Number,
        ataqueespecial: Number,
        defensaespecial: Number,
        velocidad: Number,
    },
    evoluciones: String,

});

module.exports = mongoose.model("Pokemon", PokemonSchema);
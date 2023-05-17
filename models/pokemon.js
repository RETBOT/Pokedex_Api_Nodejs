const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PokemonSchema = mongoose.Schema({
    _id: Number,
    numero: String,
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

}, { collection: 'Pokemones' });

PokemonSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Pokemon", PokemonSchema);
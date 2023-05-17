# Pokedex_Api_Nodejs

## Peticiones 
URl de servidor en linea: https://pokedex-api-server.onrender.com/api/v1/pokedex <br>
Modificar http://localhost:3000/api/v1/ por https://pokedex-api-server.onrender.com/api/v1/ para las peticiones

## Imagenes
![Api-Pokemon](https://github.com/RETBOT/Pokedex_Api_Nodejs/blob/main/Imgs/Pokemon%20Api.png)
![Api-1-Pokemon](https://github.com/RETBOT/Pokedex_Api_Nodejs/blob/main/Imgs/Pokemon%20Api%20pokemon.png)

### Registro de pokemon
POST
Url: http://localhost:3000/api/v1/pokedex/register <br>
Header: Authorization + Key <br>
Body: raw + json  <br>
```
{
    "_id": "",
    "url": "",
    "name": "",
    "image": "",
    "descripcionversionx": "",
    "descripcionversiony": "",
    "altura": "",
    "categoria": "",
    "peso": "",
    "habilidad": "",
    "sexo": "",
    "tipo": "",
    "debilidad": "",
    "puntosbase": {
        "ps": 1,
        "ataque": 2,
        "defensa": 3,
        "ataqueespecial": 4,
        "defensaespecial": 5,
        "velocidad": 6
    },
    "evoluciones": ""
}
```

### obtener todos los pokemones
GET <br>
Url: http://localhost:3000/api/v1/pokedex <br>

### obtener un pokemon
GET<br>
Url: http://localhost:3000/api/v1/pokedex/:id<br>

### Modificar
PATCH<br>
Url: http://localhost:3000/api/v1/pokedex/:id<br>
Header: Authorization + Key<br>
Body: raw + json <br>
```
{
    "_id": "",
    "url": "",
    "name": "",
    "image": "",
    "descripcionversionx": "",
    "descripcionversiony": "",
    "altura": "",
    "categoria": "",
    "peso": "",
    "habilidad": "",
    "sexo": "",
    "tipo": "",
    "debilidad": "",
    "puntosbase": {
        "ps": 1,
        "ataque": 2,
        "defensa": 3,
        "ataqueespecial": 4,
        "defensaespecial": 5,
        "velocidad": 6
    },
    "evoluciones": ""
}
```


### Eliminar
DELETE <br>
Url: http://localhost:3000/api/v1/pokedex/:id <br>
Header: Authorization + Key <br>

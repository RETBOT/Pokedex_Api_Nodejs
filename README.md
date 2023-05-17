# Pokedex_Api_Nodejs

## Peticiones 
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
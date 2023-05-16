# Pokedex_Api_Nodejs

## Peticiones 
### Registro de pokemon
POST
Url: http://localhost:3000/api/v1/pokedex/register
Header: Authorization + Key
Body: raw + json 
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
GET
Url: http://localhost:3000/api/v1/

### obtener un pokemon
GET
Url: http://localhost:3000/api/v1/pokedex/:id

### Modificar
PATCH
Url: http://localhost:3000/api/v1/pokedex/:id
Header: Authorization + Key
Body: raw + json 
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
DELETE
Url: http://localhost:3000/api/v1/pokedex/:id
Header: Authorization + Key
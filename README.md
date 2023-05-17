# Pokedex_Api_Nodejs

## Peticiones 
URl de servidor en linea: https://pokedex-api-server.onrender.com/api/v1/pokedex <br>
Modificar http://localhost:3000/api/v1/ por https://pokedex-api-server.onrender.com/api/v1/ para las peticiones

Para continuar a la siguiente pagina modificar page=[Número de página] <br>
Ejemplo: https://pokedex-api-server.onrender.com/api/v1/pokedex?page=2 

## Imagenes
```
 https://pokedex-api-server.onrender.com/api/v1/pokedex?page=1
 ```
![Api-Pokemon](https://github.com/RETBOT/Pokedex_Api_Nodejs/blob/main/Imgs/Pokemon%20Api.png)
```
 https://pokedex-api-server.onrender.com/api/v1/pokedex/N.º0004
 ```
![Api-1-Pokemon](https://github.com/RETBOT/Pokedex_Api_Nodejs/blob/main/Imgs/Pokemon%20Api%20pokemon.png)

Nota: El servidor está en la plataforma onrender. En circunstancias normales, cuando no hay usuarios activos, puede tomar de 2 a 3 minutos para que el servidor se inicie. Sin embargo, una vez iniciado, el rendimiento de carga es rápido y eficiente. Durante el periodo inicial de espera, se recomienda tener paciencia hasta que el servidor esté completamente activo. Después de este tiempo, podrás disfrutar de una carga rápida y sin demoras.

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

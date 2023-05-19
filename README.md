# Pokedex_Api_Nodejs

## Peticiones 
URl de servidor en linea: https://pokedex-api-server.onrender.com/api/v1/pokedex <br>
Modificar http://localhost:3000/api/v1/ por https://pokedex-api-server.onrender.com/api/v1/ para las peticiones

Para continuar a la siguiente pagina modificar page=[Número de página] <br>
Ejemplo: https://pokedex-api-server.onrender.com/api/v1/pokedex?page=2 

## Imagenes

### Pokémons por Página
Obtén información sobre los pokémons de la página 1 de la pokédex.
``` url
 https://pokedex-api-server.onrender.com/api/v1/pokedex?page=1
```
Imagen: 
![Api-Pokemon](https://github.com/RETBOT/Pokedex_Api_Nodejs/blob/main/Imgs/Pokemon%20Api.png)

### Pokémon por ID
Obtén información sobre un pokémon específico utilizando su ID.
``` url
 https://pokedex-api-server.onrender.com/api/v1/pokedex/id/4
```
Imagen: 
![Api-id-Pokemon](https://github.com/RETBOT/Pokedex_Api_Nodejs/blob/main/Imgs/Pokemon%20Api%20pokemon.png)

### Pokémon por Tipo
Se puede ir concatenando con "&" y muestra todos los tipos de pokemon encontrados 
``` url
 https://pokedex-api-server.onrender.com/api/v1/pokedex/type/fuego&volador
```
Imagen: 
![Api-tipo-Pokemon](https://github.com/RETBOT/Pokedex_Api_Nodejs/blob/main/Imgs/Pokemon%20Api%20tipo.png)

### Pokémon por Debilidad
Obtén información sobre los pokémons que tienen debilidad a uno o varios tipos. Puedes concatenar varios tipos de debilidades utilizando el símbolo "&".
``` url
 https://pokedex-api-server.onrender.com/api/v1/pokedex/weakness/tierra&roca
 ```
Imagen: 
![Api-tipo-Pokemon](https://github.com/RETBOT/Pokedex_Api_Nodejs/blob/main/Imgs/Pokemon%20Api%20weakness.png)

Nota: El servidor está en la plataforma onrender. En circunstancias normales, cuando no hay usuarios activos, puede tomar de 2 a 3 minutos para que el servidor se inicie. Sin embargo, una vez iniciado, el rendimiento de carga es rápido y eficiente. Durante el periodo inicial de espera, se recomienda tener paciencia hasta que el servidor esté completamente activo. Después de este tiempo, podrás disfrutar de una carga rápida y sin demoras.


## Peticiones
Estas son las funciones controladoras asociadas a cada una de las peticiones:
register: Registra un nuevo Pokémon en la base de datos.
getPokemons: Obtiene todos los Pokémon de la base de datos paginados.
getPokemon: Obtiene un Pokémon por su ID.
getPokemonByType: Obtiene Pokémon por uno o varios tipos específicos.
getPokemonByWeakness: Obtiene Pokémon por una o varias debilidades específicas.
updatePokemon: Actualiza los datos de un Pokémon existente.
deletPokemon: Elimina un Pokémon de la base de datos.

### Registro de pokemon
``` javascript
api.post("/pokedex/register", [md_auth.asureAuth], PokemonController.register);
```
Esta petición permite registrar un nuevo Pokémon en la Pokédex. Se espera que los datos del Pokémon se envíen en el cuerpo de la solicitud (req.body). Los campos requeridos son _id (identificador único), numero, url, name, image, descripcionversionx, descripcionversiony, altura, categoria, peso, habilidad, sexo, tipo, debilidad, puntosbase y evoluciones.

### Obtener todos los pokemones
``` javascript
api.get("/pokedex", PokemonController.getPokemons);
```
Esta petición permite obtener todos los Pokémon registrados en la Pokédex. Se pueden especificar los parámetros page y limit en la consulta (req.query) para paginar los resultados.

### Obtener un Pokémon por ID
``` javascript
api.get("/pokedex/id/:id", PokemonController.getPokemon);
```
Esta petición permite obtener un Pokémon específico por su ID. El ID del Pokémon se especifica en la ruta (req.params).

### Obtener Pokémon por tipo
``` javascript
api.get("/pokedex/type/:type", PokemonController.getPokemonByType);
```
Esta petición permite obtener Pokémon que pertenezcan a uno o varios tipos específicos. Los tipos se especifican en la ruta separados por "&" (req.params).

### Obtener Pokémon por debilidad
``` javascript
api.get("/pokedex/weakness/:weakness", PokemonController.getPokemonByWeakness);
```
Esta petición permite obtener Pokémon que tengan una o varias debilidades específicas. Las debilidades se especifican en la ruta separadas por "&" (req.params).

### Actualizar un Pokémon
``` javascript
api.patch("/pokedex/update/:id", [md_auth.asureAuth], PokemonController.updatePokemon);
```
Esta petición permite actualizar los datos de un Pokémon existente. El ID del Pokémon se especifica en la ruta (req.params), y los nuevos datos se envían en el cuerpo de la solicitud (req.body).

### Eliminar un Pokémon
``` javascript
api.delete("/pokedex/delete/:id", [md_auth.asureAuth], PokemonController.deletPokemon);
```
Esta petición permite eliminar un Pokémon de la Pokédex. El ID del Pokémon a eliminar se especifica en la ruta (req.params).

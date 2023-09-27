# Reto Tecnico Backend 

Prueba técnica Indra con tecnologías e integración de API: NodeJS - Serveless - DynamoDB - Swapi.
Nota: Debe tener instalado Docker para ejecutar la BD localmente.

## Scripts


## Instalar dependencias.

```
npm i
```

## Ejecución de base de datos local y migracion de tabla.

```
npm run docker
npm run migrate 
```

## Ejecutar en modo local y pruebas unitarias.

Modo local (serverless-offline):
```
npm run local
```

Pruebas unitarias:
```
npm run test
```

## Documentación OpenAPI.

```
npm run openapi
```


## Despliegue Serverless.

```
serverless deploy
```





## Documentación de EndPoints

Endpoints del proyecto para su uso.

| PETICIÓN HTTP | PATH | DESCRIPCIÓN |
| ------ | ------ | ------ |
| GET | /movie/swapi/{id} | Obtener película usando swapi |
| GET | /movie/{id} | Obtener película |
| GET | /movie | Obtener lista de películas |
| POST | /movie | Registrar una película |




### Body Película Test (POST)

```

Body:
{
    "titulo": "La Amenaza Fantasma",
    "id_episodio": 4,
    "sinopsis_apertura": "It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire's\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire's\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....",
    "director": "George Lucas",
    "productor": "George Lucas",
    "fecha_lanzamiento": "1999-05-25",
    "especies": [
        "https://swapi.py4e.com/api/species/1/"],
    "naves": [
        "https://swapi.py4e.com/api/starships/2/"],
    "vehiculos": [
        "https://swapi.py4e.com/api/vehicles/4/"],
    "personajes": [
            "https://swapi.py4e.com/api/people/1/"
    ],
    "planetas": [
        "https://swapi.py4e.com/api/planets/1/"
    ],
    "url": "https://swapi.py4e.com/api/films/4/",
    "creado": "2014-12-09T13:50:51.644000Z",
    "editado": "2014-12-20T21:17:56.891000Z"

}
```
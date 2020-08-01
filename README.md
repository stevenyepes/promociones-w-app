# PruebaFullStackWalmartApp

## Requisitos
 - Docker
 - Docker compose
 - NodeJS (para ejecutar fuera de docker)
 - Angular CLI
 - [Base de datos de prueba] (https://github.com/walmartdigital/products-db)
 - [Bakend para el proyecto] (https://github.com/stevenyepes/promociones-w-api)


## Instalacción

```bash
$ npm install
```

## Development server
```bash
$ ng serve
```
## Ejecutar test unitarios

```bash
$ ng test
```

## Ejecutando la aplicación
- Se debe contar con la base de datos y el API ejecuntando (Ver requisitos).

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Docker

```bash
# Construir la imágen
$ docker-compose build

# Levantar entorno
$ docker-compose up
```

## Documentación

- Para ver la aplicación en local: http://localhost:4200/
- El proyecto se encuentra desplegado en Heroku en el enlace (https://promotions-walmart-app.herokuapp.com/)
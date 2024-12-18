# Documentacion proyecto API - Movies

## Descripción

Este proyecto tiene como objetivo mostrar cómo se evaluan las habilidades de un desarrollador en la creacion de APIs RESTful.
A continuación, se proporciona una descripción general de las principales funcionalidades del proyecto.

## Características

El proyecto consiste en el desarrollo de una API **con Javascript utilizando el framework Express**. Este proyecto tiene como objetivo crear rutas e implementar acciones que permitan gestionar distintas operaciones y consultas a bases de datos. A continuación, se detallan las principales características de este proyecto:

1. **API**: La aplicación desarrollada se encarga de consumir la API obteniendo información relevante sobre distintas peliculas. Se crea una API que ofrece diversas funcionalidades incluyendo:

   - Búsqueda y acceso a los datos de peliculas por id.
   - Listado completo de peliculas.
   - Creacion de peliculas nuevas.
   - Eliminar peliculas.
   - Actualizar y modificar peliculas.

2. **Almacenamiento en Base de Datos**: Se implementa un esquema de base de datos, **en este caso datos guardados en un archivo .json**, para almacenar toda la información necesaria.

## Configuración

Para hacer uso de la API es necesario seguir los siguientes pasos:

**1.** Clonar repositorio.

```sh
git clone git@github.com:GonzaloQuirogaS/app-movies-crud.git
cd app-movies-crud
```

**2.** Inicializar git en repositorio local.

```sh
rm -rf .git && git init && npm init
```

**3.** Instalar dependencias.

```sh
npm install
```

**4.** Ejecutar aplicacion.

```
npm run dev
```

## Swagger

Si se desea, se puede utilizar Swagger para visualizar las operaciones disponibles dentro de la app y operar sobre ellas. [Click aquí para ir a interfaz de Swagger](http://localhost:3000/api-docs/)

## Resumen

Este documento proporciona una visión general del proyecto en su **primer version (V1).** Asegúrate de configurar correctamente la aplicacion antes de ejecutar para que funcione correctamente.

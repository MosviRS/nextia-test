Descripción general
-------------------

Esta API proporciona acceso a una base de datos de articulos. Se pueden realizar búsquedas por id, y multiples id, modificar o eliminar articulos de la base de datos.

Endpoints
---------

-   `GET /goods/:ids`: obtiene los articulos que coinciden con el id
-   `GET /good/:id`: obtiene el articulo con el ID especificado.
-   `POST /good`: añade un nuevo articulo a la base de datos.
-   `PUT /good/:id`: modifica el articulo con el ID especificado.
-   `DELETE /good/:id`: elimina el articulo con el ID especificado.

Parámetros
----------

-   `id` (number): id del articulo. Requerido para modificar o consultar un articulo.
-   `article` (string): nombre del articulo. Requerido para añadir o modificar un articulo.
-   `description` (string): description del articulo. Requerido para añadir o modificar un articulo.

Ejemplos de uso
---------------

```json

GET /goods/2,3

Response:
{
  "status": true,
  "message": "Good Items exist",
  "goods": [
    {
      "id": 2,
      "article": "Cartera",
      "description": "Craera para hombre",
      "userId": 12,
      "createdAt": "2022-12-22T23:36:09.284Z",
      "updatedAt": "2022-12-22T23:36:09.284Z"
    },
    {
      "id": 3,
      "article": "Mochila",
      "description": "Mochiñla para hombre",
      "userId": 12,
      "createdAt": "2022-12-22T23:36:27.511Z",
      "updatedAt": "2022-12-22T23:36:27.511Z"
    }
  ]
}
```

```json

POST /good
Bearer Token
Request:
{
    {
        "article":"cafetera",
        "description":"Cafetera duradera"
    }
}

Response:
{
  "status": true,
  "message": "Successfully registered good",
  "good": {
    "id": 5,
    "article": "cafetera",
    "description": "Cafetera duradera",
    "userId": 12,
    "updatedAt": "2022-12-23T00:38:30.634Z",
    "createdAt": "2022-12-23T00:38:30.634Z"
  }
}
```
Errores
-------

-   `400 Bad Request`: se ha enviado una solicitud con parámetros incorrectos o faltantes.
-   `404 Not Found`: se ha intentado acceder a un articulo con un ID que no existe.

Autenticación
-------------

Esta API requiere autenticación para añadir, modificar o eliminar articulos. Se puede realizar la autenticación mediante el envío de un token de acceso en el encabezado de la solicitud (`Authorization: Bearer <TOKEN>`). Los tokens de acceso se pueden obtener mediante el uso del endpoint `POST /login` con un usuario previamente creado con `POST /register`

Para correr el script hay que ejecutar el siguiente comando:
```sh
npx ts-node seeder.ts

```



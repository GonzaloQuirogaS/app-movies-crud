const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "API CRUD MOVIES - OpenAPI 3.0",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
    tags: [
      {
        name: "Movie",
        description: "Crud operations",
      },
    ],
    paths: {
      "/api/v1/movies": {
        get: {
          tags: ["Movie"],
          summary: "Get all movies",
          description: "Get all movies",
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      status: {
                        type: "string",
                        example: "OK",
                      },
                      data: {
                        type: "array",
                        "items:$ref": "#/components/schemas/Movie",
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: "FAILED",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      status: {
                        type: "string",
                        example: "FAILED",
                      },
                      data: {
                        type: "object",
                        properties: {
                          error: {
                            type: "string",
                            example: "Some error message",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/api/v1/movies/create": {
        post: {
          tags: ["Movie"],
          summary: "Add a new Movie",
          description: "Add a new Movie",
          requestBody: {
            description: "Create a new movie",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/RequestMovie",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/RequestMovie",
                },
              },
              "application/x-www-form-urlencoded": {
                schema: {
                  $ref: "#/components/schemas/RequestMovie",
                },
              },
            },
            required: true,
          },
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      status: {
                        type: "string",
                        example: "OK",
                      },
                      data: {
                        type: "array",
                        "items:$ref": "#/components/schemas/Movie",
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: "FAILED",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      status: {
                        type: "string",
                        example: "FAILED",
                      },
                      data: {
                        type: "object",
                        properties: {
                          error: {
                            type: "string",
                            example: "Some error message",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/api/v1/movies/{id}": {
        get: {
          tags: ["Movie"],
          summary: "Find movie by ID",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "Id",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],

          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      status: {
                        type: "string",
                        example: "OK",
                      },
                      data: {
                        type: "array",
                        "items:$ref": "#/components/schemas/Movie",
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: "FAILED",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      status: {
                        type: "string",
                        example: "FAILED",
                      },
                      data: {
                        type: "object",
                        properties: {
                          error: {
                            type: "string",
                            example: "Some error message",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/api/v1/movies/update/{id}": {
        patch: {
          tags: ["Movie"],
          summary: "Update movies",
          description:
            "Delete a movie, receiving the movie ID by parameter and the movie updated by body ",
          requestBody: {
            description: "Update a movie",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/RequestMovie",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/RequestMovie",
                },
              },
              "application/x-www-form-urlencoded": {
                schema: {
                  $ref: "#/components/schemas/RequestMovie",
                },
              },
            },
            required: true,
          },
          parameters: [
            {
              name: "id",
              in: "path",
              description: "Id",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      status: {
                        type: "string",
                        example: "OK",
                      },
                      data: {
                        type: "array",
                        "items:$ref": "#/components/schemas/Movie",
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: "FAILED",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      status: {
                        type: "string",
                        example: "FAILED",
                      },
                      data: {
                        type: "object",
                        properties: {
                          error: {
                            type: "string",
                            example: "Some error message",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/api/v1/movies/delete/{id}": {
        delete: {
          tags: ["Movie"],
          summary: "Delete a movie",
          description: "Delete a movie",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "Id",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            400: {
              description: "Invalid id value",
            },
          },
        },
      },
    },
    components: {
      schemas: {
        Movie: {
          required: ["title", "photoUrls"],
          type: "object",
          properties: {
            id: {
              type: "integer",
              format: "string",
              example: 10,
            },
            title: {
              type: "string",
              example: "movie1",
            },
            year: {
              type: "integer",
              format: "int64",
              example: 1990,
            },
            runtime: {
              type: "integer",
              format: "int64",
              example: 120,
            },
            genres: {
              type: "array",
              example: ["Comedy", "Horror"],
            },
            director: {
              type: "string",
              example: "director1",
            },
            actors: {
              type: "string",
              example: "actor1, actor2",
            },
            plot: {
              type: "string",
              example: "movie plot",
            },
            posterUrl: {
              type: "string",
              example: "urlposter",
            },
          },
        },
        RequestMovie: {
          required: ["title"],
          type: "object",
          properties: {
            title: {
              type: "string",
              example: "movie1",
            },
            year: {
              type: "integer",
              format: "int64",
              example: 1990,
            },
            runtime: {
              type: "integer",
              format: "int64",
              example: 120,
            },
            genres: {
              type: "array",
              example: ["Comedy", "Horror"],
            },
            director: {
              type: "string",
              example: "director1",
            },
            actors: {
              type: "string",
              example: "actor1, actor2",
            },
            plot: {
              type: "string",
              example: "movie plot",
            },
            posterUrl: {
              type: "string",
              example: "urlposter",
            },
          },
        },
      },
      requestBodies: {
        Movie: {
          description: "Movie object that needs to be added to the db",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/RequestMovie",
              },
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/RequestMovie",
              },
            },
          },
        },
      },
    },
  },
  apis: ["../../v1/route/moviesRoutes.js"],
};

const specs = swaggerJsdoc(options);

module.exports = specs;

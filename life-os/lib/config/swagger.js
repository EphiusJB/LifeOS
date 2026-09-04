import { createSwaggerSpec } from "next-swagger-doc";

function getApiDocs() {
  return createSwaggerSpec({
    apiFolder: "app/api/v1", 
    definition: {
      openapi: "3.0.0",
      info: {
        title: "LifeOS API",
        version: "2.0.0",
        description: "API LifeOS",
      },
      servers: [
        {
          url: "/api/v1",
          description: "Current environment",
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [{ bearerAuth: [] }],
    },
  });
}

export default getApiDocs;

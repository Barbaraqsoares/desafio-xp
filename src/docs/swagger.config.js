const swaggerConfig = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Express API - Desafio - Xp",
      description: "Api que simula uma aplicação que se assemelha a um aplicativo de investimentos em ações e algumas funcionalidades de conta digital.",
      version: "1.0.0"
    },
    servers: [{
      url: "http://localhost:3000",
      description: "servidor local"
    }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ["./src/routers/ativos.router.js", "./src/routers/cliente.router.js", "./src/routers/investimentos.js", "./src/routers/login.js", "./src/routers/qntInvestida.router.js"]
}

module.exports = swaggerConfig;
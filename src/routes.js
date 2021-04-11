const express = require("express"); // biblioteca que cria o servidor
const routes = express.Router(); // método para criar as rotas
const DashboardController = require("./controllers/DashboardController");
const JobController = require("./controllers/JobController");
const ProfileController = require("./controllers/ProfileController");

//** Rotas */
routes.get("/", DashboardController.index);
routes.get("/job", JobController.create);
routes.post("/job", JobController.save);
routes.get("/job/:id", JobController.show);
routes.post("/job/:id", JobController.update);
routes.post("/job/delete/:id", JobController.delete);
routes.get("/profile", ProfileController.index);
routes.post("/profile", ProfileController.update);

module.exports = routes; // vai exportar a constante routes

const express = require("express");
const path = require("path");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Ficheiros estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rotas
const guitarraRoutes = require("./routes/guitarra.routes");
const utilizadorRoutes = require("./routes/utilizador.routes");
const encomendaRoutes = require("./routes/encomenda.routes");

app.use("/guitarras", guitarraRoutes);
app.use("/utilizadores", utilizadorRoutes);
app.use("/encomendas", encomendaRoutes);

// Home
app.get("/", (req, res) => {
  res.render("pages/index", {
    titulo: "GuitarLab - App de Venda e Personalização de Guitarras"
  });
});

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});

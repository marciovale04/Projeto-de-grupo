exports.sucesso = (req, res) => {
  res.render("pages/encomenda_sucesso", {
    cor: req.query.cor,
    madeira: req.query.madeira,
    pickups: req.query.pickups,
    extras: req.query.extras
  });
};

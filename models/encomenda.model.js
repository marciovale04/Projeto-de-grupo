const sql = require("./conexao.db");

// construtor
const Encomenda = function (encomenda) {
  this.id_utilizador = encomenda.id_utilizador;
  this.estado = encomenda.estado;
  this.preco_total = encomenda.preco_total;
};

// CREATE
Encomenda.create = (novaEncomenda, result) => {
  sql.query(
    `INSERT INTO encomenda (id_utilizador, estado, preco_total)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [
      novaEncomenda.id_utilizador,
      novaEncomenda.estado,
      novaEncomenda.preco_total
    ],
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      result(null, res.rows[0]);
    }
  );
};

// FIND ALL
Encomenda.getAll = (result) => {
  sql.query(
    `SELECT e.id, u.nome AS cliente, e.estado, e.preco_total
     FROM encomenda e
     JOIN utilizador u ON e.id_utilizador = u.id
     ORDER BY e.id`,
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      result(null, res.rows);
    }
  );
};

// FIND BY ID
Encomenda.findById = (id, result) => {
  sql.query(
    `SELECT * FROM encomenda WHERE id = $1`,
    [id],
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (res.rows.length) {
        result(null, res.rows[0]);
        return;
      }

      result({ kind: "not_found" }, null);
    }
  );
};

// UPDATE
Encomenda.updateById = (id, encomenda, result) => {
  sql.query(
    `UPDATE encomenda
     SET estado = $1, preco_total = $2
     WHERE id = $3`,
    [encomenda.estado, encomenda.preco_total, id],
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (res.rowCount === 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      result(null, { id: id, ...encomenda });
    }
  );
};

// DELETE
Encomenda.remove = (id, result) => {
  sql.query(
    `DELETE FROM encomenda WHERE id = $1`,
    [id],
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (res.rowCount === 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      result(null, res);
    }
  );
};

module.exports = Encomenda;

const pool = require("../config/db.config");

const Utilizador = {

  getAll: async () => {
    const result = await pool.query(
      "SELECT * FROM public.utilizador"
    );
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query(
      "SELECT * FROM public.utilizador WHERE id_utilizador = $1",
      [id]
    );
    return result.rows[0];
  },

  create: async (utilizador) => {
    const { nome, email, password, morada, telefone, data_registo } = utilizador;

    const result = await pool.query(
      `INSERT INTO public.utilizador
       ("nome ", email, password, morada, telefone, data_registo)
       VALUES ($1,$2,$3,$4,$5,$6)
       RETURNING *`,
      [nome, email, password, morada, telefone, data_registo]
    );

    return result.rows[0];
  },

  update: async (id, utilizador) => {
    const { nome, email, password, morada, telefone } = utilizador;

    const result = await pool.query(
      `UPDATE public.utilizador
       SET "nome "=$1, email=$2, password=$3, morada=$4, telefone=$5
       WHERE id_utilizador=$6
       RETURNING *`,
      [nome, email, password, morada, telefone, id]
    );

    return result.rows[0];
  },

  delete: async (id) => {
    const result = await pool.query(
      "DELETE FROM public.utilizador WHERE id_utilizador=$1 RETURNING *",
      [id]
    );
    return result.rows[0];
  },
  create: async (utilizador) => {
    const { nome, email, password, morada, telefone } = utilizador;

    const result = await pool.query(
      `INSERT INTO public.utilizador
     ("nome ", email, password, morada, telefone, data_registo)
     VALUES ($1, $2, $3, $4, $5, CURRENT_DATE)
     RETURNING *`,
      [nome, email, password, morada, telefone]
    );

    return result.rows[0];
  },

};

module.exports = Utilizador;

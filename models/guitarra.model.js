const pool = require("../config/db.config");

const Guitarra = {

  // 🔹 LISTAR TODAS AS GUITARRAS
  getAll: async () => {
    const result = await pool.query(
      "SELECT * FROM public.guitarra ORDER BY id_guitarra"
    );
    return result.rows;
  },

  // 🔹 OBTER GUITARRA POR ID
  getById: async (id) => {
    const result = await pool.query(
      "SELECT * FROM public.guitarra WHERE id_guitarra = $1",
      [id]
    );
    return result.rows[0];
  },

  // 🔹 CRIAR NOVA GUITARRA
  create: async (guitarra) => {
    const {
      nome,
      marca,
      modelo,
      descricao,
      preco_base,
      stock,
      imagem_url
    } = guitarra;

    const result = await pool.query(
      `INSERT INTO public.guitarra
       (nome, marca, modelo, descricao, preco_base, stock, imagem_url)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [nome, marca, modelo, descricao, preco_base, stock, imagem_url]
    );

    return result.rows[0];
  },

  // 🔹 ATUALIZAR GUITARRA
  update: async (id, guitarra) => {
    const {
      nome,
      marca,
      modelo,
      descricao,
      preco_base,
      stock,
      imagem_url
    } = guitarra;

    const result = await pool.query(
      `UPDATE public.guitarra
       SET nome = $1,
           marca = $2,
           modelo = $3,
           descricao = $4,
           preco_base = $5,
           stock = $6,
           imagem_url = $7
       WHERE id_guitarra = $8
       RETURNING *`,
      [nome, marca, modelo, descricao, preco_base, stock, imagem_url, id]
    );

    return result.rows[0];
  },

  // 🔹 APAGAR GUITARRA
  delete: async (id) => {
    const result = await pool.query(
      "DELETE FROM public.guitarra WHERE id_guitarra = $1 RETURNING *",
      [id]
    );

    return result.rows[0];
  }

};

module.exports = Guitarra;

import express from "express";
const router = express.Router();

// importar el modelo nota
import Nota from "../models/nota";

// Agregar una nota

// ruta post
router.post("/nueva-nota", async (req, res) => {
  const body = req.body;
  try {
    const notaDB = await Nota.create(body);
    res.status(200).json(notaDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Get con parametros
router.get("/nota/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const notaDB = await Nota.findOne({ _id });
    res.json(notaDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Get con todos los documentos
router.get("/nota", async (req, res) => {
  try {
    const notaDB = await Nota.find();
    res.json(notaDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Delete con parametros
router.delete("/nota/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const notaDb = await Nota.findByIdAndDelete({ _id });
    if (!notaDb) {
      res.status(400).json({
        mensaje: "No se encontro el id",
        error,
      });
    }
    res.json(notaDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Update con parametros
router.put("/nota/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const notaDb = await Nota.findByIdAndUpdate(_id, body, { new: true });
    res.json(notaDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// exportamos la configuracion de express app
module.exports = router;

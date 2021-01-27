import mongoose from "mongoose";
const Schema = mongoose.Schema;

const notaSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "Nombre obligatorio"],
  },
  nota: {
    type: Number,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  activo: {
    type: Boolean,
    default: true,
  },
});

// Convertir a modelo
const Nota = mongoose.model("Nota", notaSchema);

export default Nota;

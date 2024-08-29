import mongoose, { Schema } from "mongoose"

const categoriaSchema = new Schema({
  nombre: { type: String, required: true },
})

const Categoria = mongoose.model("Categoria", categoriaSchema)

export default Categoria

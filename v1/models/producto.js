import mongoose from "mongoose"

const productoSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  //categoria: {},
})

const Producto = mongoose.model("Producto", productoSchema)

export default Producto

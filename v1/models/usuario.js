import mongoose, { mongo, Schema } from "mongoose"

const usuarioSchema = new Schema({
  cemail: { type: string, required: true, unique: true },
  password: { type: string, required: true },
})

const usuario = mongoose.Model("usuario", usuarioSchema)

export default usuario

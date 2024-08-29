import mongoose from "mongoose"

async function conection() {
  try {
    await mongoose.connect("mongodb://localhost:27017/fake-api")
    console.log("Conectado a la base de datos")
  } catch (err) {
    console.error(err)
  }
}

export default conection

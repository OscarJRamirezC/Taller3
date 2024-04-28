const mongoose = require("mongoose"); // importando el componente mogoose
const RedesSociales = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    fechaSalida: {
        type: Date,
        required: true,
    },
    EmpresaEncargada: {
        type: String,
        required: true,
    },
    UsuariosActivos: {
        type: Number,
        required: true,
    },
    CuentasInactivas: {
        type: Number,
        required: false,
    },
    ModeradoresActivos: {
        type: Number,
        required: false,
    },
    RangoEdad: {
        type: Number,
        requiered: false,
    }
});
module.exports = mongoose.model("redes", RedesSociales);
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
    CuentasBaneadas: {
        type: Number,
        required: true,
    },
    ModeradoresActivos: {
        type: Number,
        required: true,
    },
    RangoEdad: {
        type: Number,
        requiered: false,
    }
});
module.exports = mongoose.model("redes", RedesSociales);
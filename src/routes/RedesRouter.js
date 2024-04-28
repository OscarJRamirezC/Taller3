const express = require("express");
const router = express.Router();
const RedeSociales = require("../models/RedeSociales");
router.post("/RedeSociales", (req, res) => {
    const redes = RedeSociales(req.body);
    redes
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.get("/RedeSociales", (req, res) => {
    RedeSociales.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.delete("/RedeSociales/:id", (req, res) => {
    const { id } = req.params;
    RedeSociales
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
router.put("/RedeSociales/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, fechaSalida, EmpresaEncargada, UsuariosActivos, CuentasInactivas, ModeradoresActivos, RangoEdad } = req.body;
    RedeSociales
        .updateOne({ _id: id }, {
            $set: { nombre, fechaSalida, EmpresaEncargada, UsuariosActivos, CuentasInactivas, ModeradoresActivos, RangoEdad }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;

const express = require("express");
const RedeSociales = require("../models/RedeSociales");
router.post("/RedeSociales", (req, res) => {
    const redes = RedeSociales(req.body);
    redes
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;

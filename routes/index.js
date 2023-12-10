// Imports
const router = require("express").Router();
const apiRoutes = require("./api");

// Middleware
router.use("/api", apiRoutes);

router.use((req, res) => res.send("This is the wrong route!"));

// Exports
module.exports = router;

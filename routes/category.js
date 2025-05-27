const express = require("express");
const { showTest, createImages } = require("../controllers/category");
const router = express.Router();
router.get("/test", showTest); 
router.post("/image", createImages);
module.exports = router;
// หกหกหก
const express = require("express");
const {
    updateNews,
    deleteNews,
    createNews,
    getNewsByIdAndCategory,
    getNewsByCategory,
    getAllNews
} = require("../controller/xeberController");

const router = express.Router();

router.get("/all", getAllNews);
router.get("/:category", getNewsByCategory);
router.get("/:category/:id", getNewsByIdAndCategory);
router.post("/all", createNews);
router.delete("/:id", deleteNews);
router.put("/:category/:id", updateNews);

module.exports = router;

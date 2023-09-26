import express from "express";
const router = express.Router();

router.get("/");
router.post("/");

router.put("/:id");
router.delete("/:id");
router.get("/:id");

export default router;

import { Router } from "express";

const router = Router();

router.get("/", index);

function index(req, res, next) {
    try {
      return res.status(200).json({ message: "Server ready" });
    } catch (error) {
      return next(error);
    }
  }

export default router;
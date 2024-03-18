import express from "express";

import {
  createBook,
  displayBook,
  displaySingleBook,
  updateBook,
  deleteBook
} from "../controller/bookController.js";

const router = express.Router();

//Route for save a new Book
router.post("/", createBook);

router.get("/", displayBook);

router.get("/:id", displaySingleBook);

//Route for update  book
router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

export default router;

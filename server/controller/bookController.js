import { Book } from "../models/bookModel.js";

export const createBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear || !req.body.aboutBook || !req.body.geners) {
      return res.status(400).send({
        message: "send all required files: title, author, publishYear, aboutBook, geners",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
      aboutBook: req.body.aboutBook,
      geners: req.body.geners
    };

    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const displayBook = async (req, res) => {
  try {
    const books = await Book.find({});

    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};

export const displaySingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear || !req.body.aboutBook || !req.body.geners) {
      return res.status(200).send({
        message: "send all required files: title, author, publishYear",
      });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
    return res.status(200).json({
      message: "Book updated successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
    return res.status(200).json({
      message: "Book deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};

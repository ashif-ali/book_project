const Book = require('../models/Book');

// @desc    Get all books
// @route   GET /api/books
// @access  Public
const getBooks = async (req, res) => {
  const books = await Book.find({});
  res.json(books);
};

// @desc    Get a single book by ID
// @route   GET /api/books/:id
// @access  Public
const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

// @desc    Create a new book
// @route   POST /api/books
// @access  Private
const createBook = async (req, res) => {
  const { title, author, genre, price, inStock } = req.body;

  if (!title || !author || !genre || !price) {
    res.status(400).json({ message: 'Please add all required fields' });
    return;
  }

  const book = new Book({
    user: req.user._id,
    title,
    author,
    genre,
    price,
    inStock: inStock !== undefined ? inStock : true,
  });

  const createdBook = await book.save();
  res.status(201).json(createdBook);
};

// @desc    Update a book
// @route   PUT /api/books/:id
// @access  Private
const updateBook = async (req, res) => {
  const { title, author, genre, price, inStock } = req.body;
  const book = await Book.findById(req.params.id);

  if (book) {
    // Ensure the logged-in user is the owner of the book
    if (book.user.toString() !== req.user.id) {
      res.status(401).json({ message: 'Not authorized to update this book' });
      return;
    }

    book.title = title || book.title;
    book.author = author || book.author;
    book.genre = genre || book.genre;
    book.price = price || book.price;
    book.inStock = inStock !== undefined ? inStock : book.inStock;

    const updatedBook = await book.save();
    res.json(updatedBook);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

// @desc    Delete a book
// @route   DELETE /api/books/:id
// @access  Private
const deleteBook = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    // Ensure the logged-in user is the owner of the book
    if (book.user.toString() !== req.user.id) {
      res.status(401).json({ message: 'Not authorized to delete this book' });
      return;
    }

    await Book.deleteOne({ _id: req.params.id });
    res.json({ message: 'Book removed' });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

module.exports = { getBooks, getBookById, createBook, updateBook, deleteBook };
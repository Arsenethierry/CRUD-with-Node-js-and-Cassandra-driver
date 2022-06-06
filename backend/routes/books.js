import express from 'express'
import { getAllBooks, postBook } from '../controllers/books.js';

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", postBook);

export default router;
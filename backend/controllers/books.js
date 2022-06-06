import { client } from "../db-connection/connection.js";
import { types } from "cassandra-driver";

var getAllBooksQuerry = "SELECT * FROM bookskey.books";

export const getAllBooks = async(req,res)=>{
    try {
        const results = await client.execute(getAllBooksQuerry);
        console.log(results.rows);

        res.status(200).json(results.rows);
    } catch (error) {
        console.log(error)
    }
}

export const postBook = async(req,res)=>{
    var upsertBook = 'INSERT INTO bookskey.books(book_id,book_title,author,category) VALUES (?,?,?,?)'
    try {
        
       await client.execute(upsertBook,[types.TimeUuid.now(),req.body.title,req.body.author,req.body.category]);
       res.status(201).json("new book added successfully");

    } catch (error) {
        res.status(404).send({ message: error });
        console.log(error);
    }
}
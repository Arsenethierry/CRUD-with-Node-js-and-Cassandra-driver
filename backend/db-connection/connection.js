import { Client } from "cassandra-driver";

export const client = new Client({
    cloud:{
        secureConnectBundle: 'C:/Users/ADMIN/Downloads/Compressed/secure-connect-stakesmendb.zip',
    },
    credentials:{
        username:'XcwKrwPLydHsZlFEaPYZalzG',
        password: '7dUBeh8uAJcpnjd0yucRelcfa.+88TkvhM1BNJCN7ZZ6L5fZjPSSPP-,Hjo+ojT_Pz9N7kPzUO-xHEcGdZxh6iXz33ApebKU-sXAfBFz6v8Ep,NtbIcerAqg4BAZ9mwL',
    },
})

function booksTable(){
    var query = `CREATE TABLE IF NOT EXISTS bookskey.books (
        book_id UUID,
        book_title TEXT,
        author text,
        category text,
        PRIMARY KEY (book_id))`
    client.execute(query);
}
booksTable();


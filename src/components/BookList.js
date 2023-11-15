import React from "react";
import BookShow from "./BookShow.js"



function BookList({books, onDelete, onEdit}) {
  const renderedBooks = books.map((book) => {
    return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}/>
  }); // maps through the books to show each book by id, key prop need to be assigned because we are listing different elements
  // onDelete deletes a book by its id

  return <>
    <div className="book-list">
      {renderedBooks}
    </div>
  </>
}


export default BookList;
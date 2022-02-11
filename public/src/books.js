function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}


function partitionBooksByBorrowedStatus(books) {
  let booksNotReturned = books.filter((book) =>
    book.borrows.some((borrow) => !borrow.returned));
  let booksReturned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned));
   let filteredByBorrowStatus = [[...booksNotReturned], [...booksReturned]];
    return filteredByBorrowStatus;
  }


function getBorrowersForBook(book, accounts) {
  return (
    book.borrows.map((borrow) => {
         let account = accounts.find((account) => account.id === borrow.id);
         return { ...borrow, ...account };
        })
        .slice(0, 10)
    );
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

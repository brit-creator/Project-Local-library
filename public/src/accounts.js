function findAccountById(accounts, id) {
   return accounts.find((account) => account.id === id );
}

function sortAccountsByLastName(accounts) {
 return accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1
);
}

function getTotalNumberOfBorrows({id}=account, books) {
let count = 0;
books.forEach(book => {
  book.borrows.forEach((item) => {
    if (item.id === id) {
      count++;
    }
  });
});
return count;
}

function getBooksPossessedByAccount({ id }, books, authors) {
  return books.reduce((acc, book) => {
      book.borrows[0].id === id && !book.borrows[0].returned
          ? acc.push({ ...book, author: authors.find((auth) => auth.id === book.authorId) })
          : null;
      return acc;
  }, []);
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

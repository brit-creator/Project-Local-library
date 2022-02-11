function _sortAndSpliceArray(array) {
  array.sort((item1, item2) => item2.count - item1.count);
  array.splice(5);
  return array;
}

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}


  function getBooksBorrowedCount(books) {
      let totalBooksBorrowed = 0;
      for (let book in books) {
        if (!books[book].borrows[0].returned) {
          totalBooksBorrowed += 1;
        }
      }
      return totalBooksBorrowed; }


function getMostCommonGenres(books) {
  let topGenres = books.reduce((acc, book) => {
    const genreOfBook = book.genre;
    let genreExists = acc.find((element) => element.name === genreOfBook);
    if (genreExists) {
      genreExists.count++}
    else {
      const genreObj = {
        name: genreOfBook,
        count: 1,}
      acc.push(genreObj)} 
    return acc}, []) 
    return _sortAndSpliceArray(topGenres);
  }

function getMostPopularBooks(books) {
  let finalArray = []; 
  for (let book of books) {
    const bookObject = {
      name: book.title,
      count: book.borrows.length
    };
    finalArray.push(bookObject);
  }
    return _sortAndSpliceArray(finalArray);
}


function getMostPopularAuthors(books, authors) {
let topAuthorArray = [];
books.forEach(book => {
  authors.forEach(author => {
    let borrowCount = 0;
    if (book.authorId === author.id){
borrowCount += book.borrows.length;
      const authorObj = {
        name: `${author.name.first} ${author.name.last}`,
        count: borrowCount
      }
      topAuthorArray.push(authorObj);
    }
  });
});
return _sortAndSpliceArray(topAuthorArray);
}
/*
function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  books.forEach(book => {
    authors.forEach(author => {
      if(book.authorId === author.id){
        popularAuthors.push({
          'name': ${author.name.first} ${author.name.last},
          'count': book.borrows.length
        });
      }
    });
  });
  popularAuthors.sort((a,b) => b.count - a.count);
  let popularAuthorsReturn = popularAuthors.slice(0,5);
  return popularAuthorsReturn;
}

*/
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

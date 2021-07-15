const books = [
  {
    isbn: 12345,
    title: "Moby Dick",
    author: "Herman Melville",
    rating: 8,
    publishedYear: 1851,
  },
  {
    isbn: 4567,
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    rating: 9,
    publishedYear: 1954,
  },
  {
    isbn: 7894,
    title: "The Lord of the Rings",
    author: "JRR Tolkein",
    rating: 9,
    publishedYear: 1945,
  },
  {
    isbn: 7894,
    title: "The Lord of the Rings",
    author: "JRR Tolkein",
    rating: 9,
    publishedYear: 1945,
  },
];

const authors = [
  {
    isbn: "12345660",
    title: "Book 1",
    author: "author 1",
    rating: "4",
    publish_year: "2000",
  },
  {
    isbn: "12345661",
    title: "Book 2",
    author: "author 2",
    rating: "10",
    publish_year: "2000",
  },
  {
    isbn: "12345662",
    title: "Book 3",
    author: "author 3",
    rating: "10",
    publish_year: "2000",
  },
  {
    isbn: "12345660",
    title: "Book 1",
    author: "author 1",
    rating: "4",
    publish_year: "2000",
  },
  {
    isbn: "12345664",
    title: "Book 4",
    author: "author 2",
    rating: "8",
    publish_year: "2000",
  },
  {
    isbn: "12345665",
    title: "Book 3",
    author: "author 2",
    rating: "4",
    publish_year: "2000",
  },
  {
    isbn: "12345666",
    title: "Book 5",
    author: "author 3",
    rating: "4",
    publish_year: "2000",
  },
  {
    isbn: "12345667",
    title: "Book 6",
    author: "author 4",
    rating: "4",
    publish_year: "2000",
  },
  {
    isbn: "12345668",
    title: "Book 7",
    author: "author 2",
    rating: "4",
    publish_year: "2000",
  },
  {
    isbn: "12345660",
    title: "Book 1",
    author: "author 1",
    rating: "4",
    publish_year: "2000",
  },
];

const findDuplicates = (books) => {
  let pointer = 0;
  let duplicates = [];

  //Loop through book names
  for (i = 0; i < books.length; i++) {
    //Loop to compare to other books
    for (x = 0; x < books.length; x++) {
      if (books[i].title == books[x].title) {
        duplicates[pointer] = books[x];
        pointer++;
      }
    }
  }
  return duplicates;
};

// console.log(findDuplicates(books));

const getBookAndAuthor = (isbn, data) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].isbn == isbn) {
      let title = data[i].title;
      let author = data[i].author;

      let returnString =
        "The book title is: " + title + " and the author is:  " + author;

      return returnString;
    }
  }
};

console.log(getBookAndAuthor(12345664, authors));

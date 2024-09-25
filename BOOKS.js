// List of books
const books = [
  'Ikigai',
  'The First Minute',
  'The Happiness Story - Savi Sharma',
  'The Top Five Regrets of the Dying',
  'Do Epic Shit',
  'One Indian Girl',
  'One Arranged Murder',
  '400 Days',
  'The 3 Mistakes of my Life',
  'Rich Dad, Poor Dad',
  'Never Never',
  'Attitude is Everything',
  'Stories we Never tell',
  'Tale of the Two Cites',
  'Thanos - Titan Consumed',
  'Think Like a Monk',
  'A Chirstmas Carol',
  'You Only Live Once',
  'The Girl in Room 105',
  'It Starts With US',
  'It Ends With US',
  'The Richest Man in Baylon',
  'Twelfth Fail',
  '8 Rules of Love',
  'Razor Sharp',
  'Because Life is a Gift'

];

// Reference to DOM elements
const bookList = document.getElementById('bookList');
const searchBar = document.getElementById('searchBar');
const noResultsDiv = document.getElementById('noResults');

// Display the full book list initially
function displayBooks(bookArray) {
  bookList.innerHTML = '';
  bookArray.forEach(book => {
    const li = document.createElement('li');
    li.textContent = book;
    bookList.appendChild(li);
  });
}

// Function to search for books
function searchBook() {
  const searchValue = searchBar.value.toLowerCase();
  const filteredBooks = books.filter(book => book.toLowerCase().includes(searchValue));

  if (filteredBooks.length > 0) {
    noResultsDiv.style.display = 'none';
    displayBooks(filteredBooks);
  } else {
    noResultsDiv.style.display = 'block';
    bookList.innerHTML = '';
  }
}

// Initially display all books
displayBooks(books);

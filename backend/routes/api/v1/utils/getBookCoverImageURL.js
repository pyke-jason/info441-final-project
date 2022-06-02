// gets the book cover url
// size can be S, M or L
function getBookCoverImageURL(isbn, size) {
    return `https://covers.openlibrary.org/b/ISBN/${isbn}-${size}.jpg`;
}

export default getBookCoverImageURL;
import React from "react";

function BookList({ books }) {
  return (
    <div className="page">
      <h1>Livros Recomendados</h1>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id}>
            <a
              href={book.amazonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={book.imageUrl} alt={`Capa de ${book.title}`} />
              <h2>{book.title}</h2>
            </a>
            <p>{book.author}</p>
            <p>{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
import { BookProps } from "@/types/books";
import React from "react";
import { Link } from "react-router-dom";

export const BookCard: React.FC<BookProps> = ({ book }) => {
  const discountedPrice = book.price - (book.price * book.discount) / 100;

  return (
    <Link
      to={`/book/${book.bookId}`}
      key={book.bookId}
      className="flex border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
    >
      <div className="flex justify-center items-center">
        <img src={book.imageUrl} alt={book.title} className="w-32 h-52" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{book.title}</h2>
        {/* <div className=" text-left py-1">
          <strong>Author:</strong> {book.author}
        </div> */}
        <div className="py-1">
          <strong>Category:</strong> {book.category || "Other"}
        </div>
        <p className="text-gray-500">
          Price: ₹ {discountedPrice}
          {book.discount > 0 && (
            <span className="text-sm text-gray-400 line-through ml-2">
              ₹ {book.price}
            </span>
          )}
        </p>

        <div
          className={`text-sm w-fit border p-1 my-2 rounded-lg ${
            book.inStock
              ? "text-green-600 border-green-600"
              : "text-red-600 border-red-600"
          }`}
        >
          {book.inStock ? "In Stock" : "Out of Stock"}
        </div>
      </div>
    </Link>
  );
};

import React, { useState } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { books } from "@/types/bookdata";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const UploadStaticData: React.FC = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const firestore = getFirestore();

  const handleUpload = async () => {
    setUploading(true);
    setUploadSuccess(false);

    try {
      // Upload each book in the array to Firestore
      for (const book of books) {
        const bookDocRef = doc(firestore, "books", book.bookId);
        await setDoc(bookDocRef, book);
      }

      setUploadSuccess(true);
    } catch (error) {
      console.error("Error uploading books:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Upload Static Data</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <Card key={book.bookId} className="border shadow-sm">
            <CardHeader>
              <CardTitle>{book.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <p className="text-gray-700 text-sm">{book.description}</p>
              {/* <p className="mt-2 text-sm font-semibold">
                Author: {book.author}
              </p> */}
              <p className="mt-1 text-sm">
                Price: ₹ {book.price} ({book.discount}% off)
              </p>
              <p
                className={`mt-2 text-sm font-semibold ${
                  book.inStock ? "text-green-600" : "text-red-600"
                }`}
              >
                {book.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6">
        <Button className="w-full" onClick={handleUpload} disabled={uploading}>
          {uploading ? "Uploading..." : "Upload to Firestore"}
        </Button>
        {uploadSuccess && (
          <p className="mt-4 text-green-600">Products uploaded successfully!</p>
        )}
      </div>
    </div>
  );
};

export default UploadStaticData;

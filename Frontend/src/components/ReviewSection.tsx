import React, { useEffect, useState } from "react";
import { db } from "../database/Firebase";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { FaStar } from "react-icons/fa";

interface Review {
  id?: string;
  title: string;
  comment: string;
  rating: number;
  timestamp?: any;
}

interface ReviewSectionProps {
  productId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ productId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const computeReviewStats = (reviews: Review[]) => {
    const totalReviews = reviews.length;
    const ratingCounts = [0, 0, 0, 0, 0];
    let totalRating = 0;

    reviews.forEach((review) => {
      const index = review.rating - 1;
      ratingCounts[index]++;
      totalRating += review.rating;
    });

    const averageRating = totalReviews > 0 ? totalRating / totalReviews : 0;
    return { totalReviews, ratingCounts, averageRating };
  };

  const fetchReviews = async () => {
    try {
      const ref = collection(db, "Products", productId, "Star");
      const q = query(ref, orderBy("timestamp", "desc"));
      const snapshot = await getDocs(q);
      const fetched = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Review),
      }));
      setReviews(fetched);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || comment.trim() === "" || title.trim() === "") {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);
    try {
      const ref = collection(db, "Products", productId, "Star");
      await addDoc(ref, {
        title,
        comment,
        rating,
        timestamp: serverTimestamp(),
      });
      setComment("");
      setTitle("");
      setRating(0);
      setShowForm(false);
      await fetchReviews();
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [productId]);

  const { totalReviews, ratingCounts, averageRating } = computeReviewStats(reviews);

  return (
    <div className="mt-10 border-t pt-6 mx-24">

      {/* ⭐ Summary Section */}
      <div className="mb-8 ">
        <h3 className="text-2xl font-semibold text-center mb-4">Customer Reviews</h3>
        <div className="flex flex-col md:flex-row justify-between items-center border p-4 rounded-md bg-gray-50">
          <div className="text-center mb-4 md:mb-0">
            <div className="flex justify-center mb-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-xl ${
                    averageRating >= i + 1 ? "text-teal-600" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-lg font-medium text-teal-700">
              {averageRating.toFixed(2)} out of 5
            </p>
            <p className="text-sm text-gray-600">Based on {totalReviews} reviews</p>
          </div>

          <div className="flex-1 px-20 w-full max-w-md">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = ratingCounts[star - 1];
              const percent = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
              return (
                <div key={star} className="flex items-center text-sm mb-1">
                  <span className="w-6">{star}</span>
                  <FaStar className="text-teal-600 ml-1 mr-2" />
                  <div className="flex-1 bg-gray-200 h-2 rounded">
                    <div
                      className="bg-teal-600 h-2 rounded"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 w-6 text-right">{count}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition"
            >
              {showForm ? "Cancel review" : "Write a review"}
            </button>
          </div>
        </div>
      </div>

      {/* 📝 Inline Review Form */}
      {showForm && (
        <div className="bg-white border rounded-lg p-6 mb-8 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-center">Write a review</h3>
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-4">
              <p className="mb-1">Rating</p>
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`cursor-pointer text-2xl ${
                      (hovered || rating) >= star ? "text-teal-500" : "text-gray-300"
                    }`}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label className="block mb-1 font-medium">Review Title <span className="text-gray-500 text-sm">(100)</span></label>
              <input
                type="text"
                value={title}
                maxLength={100}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Give your review a title"
                className="w-full border border-teal-500 rounded px-3 py-2 focus:outline-none"
              />
            </div>

            <div className="mb-3">
              <label className="block mb-1 font-medium">Review</label>
              <textarea
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comments here"
                className="w-full border border-teal-500 rounded px-3 py-2 focus:outline-none"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
              >
                Cancel review
              </button>
              <button
                type="submit"
                disabled={loading}
                className="bg-[#3A2E25] text-white px-6 py-2 rounded hover:bg-[#5c4636]"
              >
                {loading ? "Submitting..." : "Submit Review"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* 💬 Review List */}
      {reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet.</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border p-3 rounded-lg bg-[#fff8f3]">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${
                      review.rating > i ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="font-semibold">{review.title}</p>
              <p className="text-sm text-[#3A2E25]">{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewSection;

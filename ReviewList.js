import React from 'react';

function ReviewList({ reviews }) {
  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>Rating: {review.rating}</p>
              <p>Comment: {review.comment}</p>
              {/* Additional review details */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ReviewList;

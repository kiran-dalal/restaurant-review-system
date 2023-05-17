import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

function RestaurantDetail({ match }) {
  const [restaurant, setRestaurant] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await axios.get(`YELP_FUSION_API_ENDPOINT/${id}`);
        setRestaurant(response.data);
      } catch (error) {
        console.error('Error fetching restaurant:', error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get(`REVIEW_API_ENDPOINT/${id}`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchRestaurant();
    fetchReviews();
  }, [id]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>Rating: {restaurant.rating}</p>
      <p>Price: {restaurant.price}</p>

      <ReviewForm />

      <ReviewList reviews={reviews} />
    </div>
  );
}

export default RestaurantDetail;

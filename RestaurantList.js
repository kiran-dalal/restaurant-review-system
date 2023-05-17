import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('YELP_FUSION_API_ENDPOINT');
        setRestaurants(response.data.businesses);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <h1>Restaurant List</h1>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <h3>{restaurant.name}</h3>
          <p>Rating: {restaurant.rating}</p>
          <p>Price: {restaurant.price}</p>
        </div>
      ))}
    </div>
  );
}

export default RestaurantList;

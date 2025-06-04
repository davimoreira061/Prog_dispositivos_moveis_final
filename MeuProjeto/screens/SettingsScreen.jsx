import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Substitua pela URL real da API

export const fetchSportsCars = async () => {
  try {
    const response = await axios.get(API_BASE_URL + '/sports-cars');
    return response.data;
  } catch (error) {
    console.error('Error fetching sports cars:', error);
    throw error;
  }
};

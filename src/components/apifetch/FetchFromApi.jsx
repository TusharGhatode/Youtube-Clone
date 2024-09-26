import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  params: {
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': '266ea5c0a4mshc5426121b98c1efp18c1dcjsnc8906fe19174',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

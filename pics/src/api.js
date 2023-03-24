import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID MYoCNKcx56t9Y60DesPi_4TvX4Hn14lt4rrbwq-YEr0',
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;

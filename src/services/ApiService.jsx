import axios from 'axios';

const BASE_URL = 'https://jsearch.p.rapidapi.com/search';

const headers = {
  'Content-Type': 'application/json',
  'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
  'X-RapidAPI-Key': '1f4de0b89fmsh82c36bed6622944p1eef39jsna38f337f725e',
};

const ApiService = {
  searchJobs: async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}?query=search&page=1&num_pages=1`,
        {
          headers,
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ApiService;

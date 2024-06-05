import axios from 'axios';

axios.defaults.baseURL = 'https://nesine-case-study.onrender.com';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const getBetsRequest = async () => {
  return await axios.get('/bets')
    .then(function (response) {
      console.log(response.data);
      if (response.status === 200)
        return response.data
      return []
    })
    .catch(function (error) {
      console.log(error);
      return [];
    })
}



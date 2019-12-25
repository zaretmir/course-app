import axios from 'axios';

axios.interceptors.response.use(undefined, error => {
  const expectedError = error.response.status >= 400 && error.response.status < 500;

  if (!expectedError) {
    console.log(error);
    alert('An unexpected error occured');
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete
};

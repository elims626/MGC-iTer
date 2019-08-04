import axios from '../libs/api.request'

export const apiHi = (name) => {
  const params = {
    name: name,
  };
  return axios.request({
    url: '/api/hi',
    params,
    method: 'get'
  })
};

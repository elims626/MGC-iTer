import axios from '../libs/api.request'

export const apiUserLists = () => {
  const params = {
  };
  return axios.request({
    url: '/api/query',
    params,
    method: 'get'
  })
};

//添加标签
export const addLabels= () => {
  const params = {
  };
  return axios.request({
    url: '/api/',
    params,
    method: 'get'
  })
};

//已添加的标签
export const userLabels= () => {
  const params = {
  };
  return axios.request({
    url: '/api/',
    params,
    method: 'get'
  })
};

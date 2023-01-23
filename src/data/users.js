import axios from 'axios';

export const getUser = id => {
  return axios.get(`/api/users/${id}`);
}

export const getUsers = () => {
  return axios.get('/api/users');
}

export const createUser = info => {
  return axios.post('/api/users', info);
}

export const editUser = (id, info) => {
  return axios.put(`/api/users/${id}`, info);
}

export const deleteUser = id => {
  return axios.delete(`/api/users/${id}`);
}
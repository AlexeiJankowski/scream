import axios from 'axios';

export const getScreams = () => {
  return axios.get('/api/screams');
}

export const postScream = scream => {
  return axios.post('/api/screams', scream);
}

export const deleteScream = id => {
  console.log('deleting')
  return axios.delete(`/api/screams/${id}`);
}
import axios from 'axios';

const baseUrl = 'http://localhost:3000/notes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
}

const createNew = async(content) => {
  const object = { content, completed: false };
  const response = await axios.post(baseUrl, object); // post(where, what)
  return response.data;
}

export default { getAll, createNew };
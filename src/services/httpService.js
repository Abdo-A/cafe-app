import axios from 'axios';

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};

export default http;

export const serverPath = 'http://localhost:4200';
export const menuItemAPI = `${serverPath}/api/menuitem`;

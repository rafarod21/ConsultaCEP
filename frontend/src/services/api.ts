import axios from 'axios';

// export const apiViaCEP = axios.create({
//   baseURL: 'https://viacep.com.br/ws',
// });

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

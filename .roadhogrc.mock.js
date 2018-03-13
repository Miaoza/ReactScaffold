
import { Api } from './src/config/api.config';

//
const proxy = {
  'POST /api/(.*)': Api+'/',
  'DELETE /api/(.*)': Api+'/',
  'GET /api/(.*)': Api+'/',
  'PUT /api/(.*)': Api+'/',
};

export default proxy;

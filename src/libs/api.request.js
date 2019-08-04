import HttpRequest from '@/libs/axios'
const baseUrl = process.env.NODE_ENV === 'development' ? '' : ''

const axios = new HttpRequest(baseUrl);
export default axios

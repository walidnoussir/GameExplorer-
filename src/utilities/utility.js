const baseUrl = import.meta.env.VITE_BASE_URL;
const secretKey = import.meta.env.VITE_SECRET_KEY;
const apiKey = baseUrl + "creators?" + secretKey;

export { apiKey };

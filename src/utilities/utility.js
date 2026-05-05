const baseUrl = import.meta.env.VITE_BASE_URL;
const secretKey = import.meta.env.VITE_SECRET_KEY;
const creatorsUrl = baseUrl + "creators?" + secretKey;

const creatorUrl = (creatorId) => {
  return `${baseUrl}creators/${creatorId}?${secretKey}`;
};

export { creatorsUrl, baseUrl, secretKey, creatorUrl };

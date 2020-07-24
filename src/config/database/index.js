mongodbURI = () => {
  const MONGODB_DATABASE = process.env.MONGODB_DATABASE || 'events';
  const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost';
  const MONGODB_PASS = process.env.MONGODB_PASS || null;
  const MONGODB_USER = process.env.MONGODB_USER || null;
  const MONGODB_PORT = process.env.MONGODB_PORT || 27017;
  // return `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}`;
  return `mongodb://teste:soheuse1@ds239911.mlab.com:39911/heroku_cvfrggt7`;
};

module.exports = {
  uri: mongodbURI(),
};
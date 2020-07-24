module.exports = {
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379,
  user: process.env.REDIS_USER || test,
  pass: process.env.REDIS_PASS || test,
  redis_key: process.env.REDIS_SYSTEM_KEY || 'key',
};
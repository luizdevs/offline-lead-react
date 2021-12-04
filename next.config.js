const withPWA = require('next-pwa');

module.exports = {
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  
  reactStrictMode: true,
}

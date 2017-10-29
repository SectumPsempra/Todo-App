if (process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: 'mongodb://amit:amit@ds153657.mlab.com:53657/login-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/fb-dev'}
}
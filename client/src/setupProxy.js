const { createProxyMiddleware } = require('http-proxy-middleware');
const target = process.env.API_HOST || 'http://server:3001';

module.exports = app => {
    app.use(createProxyMiddleware(
        '/api',
        {
            target,
            changeOrigin: true
        }
    ))
};
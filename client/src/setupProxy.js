const { createProxyMiddleware } = require('http-proxy-middleware');
const target = process.env.REACT_PROXY || 'http://localhost:8000';

module.exports = app => {
    app.use(createProxyMiddleware(
        '/api',
        {target}
    ))
};
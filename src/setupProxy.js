const proxy = require('http-proxy-middleware');
const target = process.env.REACT_PROXY || 'http://localhost:3010';

module.exports = app => {
    app.use(proxy('/api', {target}));
};
import '@testing-library/jest-dom';

// Polyfill the global fetch function using `require`
const fetch = require('node-fetch');
global.fetch = fetch;

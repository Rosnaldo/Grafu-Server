export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  domain: process.env.DOMAIN_REST || 'http://localhost:3001',
});

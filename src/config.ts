export default Object.freeze({
  server: {
    hostname: process.env.SERVER_HOSTNAME ?? '127.0.0.1',
    port: process.env.SERVER_PORT ?? 8080,
    env: process.env.NODE_ENV,
    isProduction: process.env.NODE_ENV === 'production',
  },
});

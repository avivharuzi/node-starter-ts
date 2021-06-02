export const config = Object.freeze({
  server: {
    hostname: process.env.SERVER_HOSTNAME ?? '0.0.0.0',
    port: process.env.SERVER_PORT ? +process.env.SERVER_PORT : 8080,
    env: process.env.NODE_ENV ?? 'development',
    isProduction: process.env.NODE_ENV === 'production',
  },
});

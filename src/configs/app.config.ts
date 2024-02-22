import { config } from 'dotenv';
// import { enc } from 'crypto-js';
config();

const AppConfig = {
  APP: {
    NAME: 'API',
    PORT: Number(process.env.PORT),
    DEBUG: Boolean(process.env.DEBUG),
    LOG_LEVEL: Number(process.env.LOG_LEVEL),
    SWAGGER_PASSWORD: process.env.SWAGGER_PASSWORD,
  },
  REDIS: {
    PASSWORD: process.env.REDIS_PASSWORD,
    HOST: process.env.REDIS_HOST,
    PORT: Number(process.env.REDIS_PORT),
  },
  JWT: {
    SECRET_KEY: process.env.SECRET_KEY,
    TOKEN_EXPIRATION: Number(process.env.TOKEN_EXPIRATION),
    REFRESH_TOKEN_SECRET_KEY: process.env.REFRESH_TOKEN_SECRET_KEY,
    REFRESH_TOKEN_EXPIRATION: Number(process.env.REFRESH_TOKEN_EXPIRATION),
  },
  // ENCRYPTION: {
  //   PASSWORD: enc.Hex.parse(process.env.ENCRYPTION_PASSWORD),
  //   IV: enc.Hex.parse(process.env.ENCRYPTION_IV),
  // },
  EMAIL: {
    HOST: process.env.EMAIL_HOST,
    USER: process.env.EMAIL_USER,
    PASSWORD: process.env.EMAIL_PASSWORD,
    FROM: process.env.EMAIL_FROM,
    PORT: Number(process.env.EMAIL_PORT),
    CONTACT_US_EMAIL: process.env.CONTACT_US_EMAIL,
  },
};

export default AppConfig;

export const envSchema = {
  type: "object",
  required: ["MONGO_URL"],
  properties: {
    MONGO_URL: {
      type: "string",
      default: "mongodb://root:root@localhost:27017/",
    },
  },
};

export const envOptions = {
  confKey: "config",
  schema: envSchema,
  dotenv: true,
  data: process.env,
};

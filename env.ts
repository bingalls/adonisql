import Env from '@ioc:Adonis/Core/Env'

export default Env.rules({
  APP_KEY: Env.schema.string(),
  DB_CONNECTION: Env.schema.enum(['mysql', 'pgsql', 'sqlite']),
  DB_DATABASE: Env.schema.string(),
  DB_HOST: Env.schema.string({ format: 'host' }),
  DB_PASSWORD: Env.schema.string(),
  DB_PORT: Env.schema.number(),
  DB_USER: Env.schema.string(),
  HASH_DRIVER: Env.schema.string(),
  HOST: Env.schema.string(),
  NODE_ENV: Env.schema.enum(['development', 'production']),
  PORT: Env.schema.number(),
  SESSION_DRIVER: Env.schema.enum(['cookie']),
})

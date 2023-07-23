import { cleanEnv, num } from 'envalid';

export default cleanEnv(process.env, {
  PORT: num({ default: 5200 })
})

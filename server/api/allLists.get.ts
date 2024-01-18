import { Lists } from '../utils/db'; 

export default defineEventHandler((event) => {
  return Lists.query().limit(1000).find();
})
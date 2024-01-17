import { Lists } from '../utils/db'; 
import { seed } from '../utils/lists.seed';

export default defineEventHandler((event) => {
  seed();
  const allLists = Lists.query().limit(1000).find()

  return {
    allLists
  }
})
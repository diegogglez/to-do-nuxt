import { Tasks } from '../utils/db'; 
// import { seed } from '../utils/tasks.seed';

export default defineEventHandler((event) => {
  // seed();
  const allTasks = Tasks.query().limit(1000).find();

  return {
    allTasks
  }
})
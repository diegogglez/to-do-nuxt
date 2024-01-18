import { Lists } from '../utils/db';

const demoTasks = [
  { name: 'to do', labelColor: 'border-cyan-400', tasks: [] },
  { name: 'in development', labelColor: 'border-fuchsia-400', tasks: [] },
  { name: 'delivered', labelColor: 'border-amber-400', tasks: [] },
]

export default defineEventHandler((event) => {
  console.log('deleting all items from lists collection...');
  
  Lists.query().limit(1000).find().forEach(item => {
    Lists.delete(item._id);
  });
  
  console.log('adding seed data...')
  Lists.insertMany(demoTasks);

  return Lists.query().limit(1000).find();
})



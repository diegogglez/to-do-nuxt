import { Lists } from './db';

const demoTasks = [
  { name: 'to do', labelColor: 'cyan-400', tasks: [] },
  { name: 'in development', labelColor: 'fuchsia-400', tasks: [] },
  { name: 'delivered', labelColor: 'amber-400', tasks: [] },
]

export const seed = () => {
  
  console.log('deleting all items from lists collection...');
  
  Lists.query().limit(1000).find().forEach(item => {
    Lists.delete(item._id);
  });
  
  console.log('adding seed data...')
  Lists.insertMany(demoTasks);
};



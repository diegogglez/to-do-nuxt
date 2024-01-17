import { Tasks } from './db';

const demoTasks = [
  { name: 'buy grocery', category: 'home' },
  { name: 'fuel car', category: 'car' },
  { name: 'estudy vue.js', category: 'coding' },
  { name: 'kill some cats', category: 'hobbies' },
  { name: 'estudy vue.js', category: 'coding' },
]

export const seed = () => {
  
  console.log('deleting all items from tasks collection...');
  
  Tasks.query().limit(1000).find().forEach(item => {
    Tasks.delete(item._id);
  });
  
  console.log('adding seed data...')
  Tasks.insertMany(demoTasks);
};



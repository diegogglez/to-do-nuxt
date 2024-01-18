import { Lists } from '../utils/db'; 

export default defineEventHandler((event) => {
  
  const newList = {
    name: '',
    labelColor: '',
    tasks: []
  }

  return Lists.insert(newList);
})
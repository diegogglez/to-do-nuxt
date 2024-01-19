import { Lists } from '../utils/db'; 

export default defineEventHandler(async (event) => {
  const { id, title, tasks } = await readBody(event);
  Lists.update(id, { name: title, tasks: tasks });
  // const list = Lists.query().equalTo('_id', id).find();
  // console.log(list);
})
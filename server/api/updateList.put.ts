import { Lists } from '../utils/db'; 

export default defineEventHandler(async (event) => {
  const { id, newTitle } = await readBody(event);
  Lists.update(id, { name: newTitle });
  // const list = Lists.query().equalTo('_id', id).find();
  // console.log(list);
})
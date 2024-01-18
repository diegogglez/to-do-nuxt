import { Lists } from '../../utils/db'; 

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id');

  if (id !== undefined) {
    const listDeleted = Lists.query().equalTo('_id', id).find();
    Lists.delete(id);
    return listDeleted;
  };
})
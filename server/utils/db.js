import { neboa } from 'neboa';

export const db = neboa('todoApp.db');
export const Tasks = db.collection('tasks');

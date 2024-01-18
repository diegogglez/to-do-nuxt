import { neboa } from 'neboa';

export const db = neboa('todoApp.db');
export const Lists = db.collection('lists');

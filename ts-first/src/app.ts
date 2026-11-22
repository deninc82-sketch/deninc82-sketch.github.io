import Person from './User.js';
import { log as logger } from './analytics.js';

const user = new Person('Андрій');
logger(user.greet());

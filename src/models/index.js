// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LandingUser } = initSchema(schema);

export {
  LandingUser
};
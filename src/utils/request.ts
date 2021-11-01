import { HttpClient } from 'tsrpc-browser';

import { serviceProto } from '../shared/protocols/serviceProto';
export const client = new HttpClient(serviceProto, {
  server: 'http://192.168.1.19:3000',
  logger: console
})

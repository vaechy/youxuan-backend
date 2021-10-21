import assert from 'assert';
import { HttpClient, TsrpcError } from 'tsrpc';
import { serviceProto } from '../../src/shared/protocols/serviceProto';

// 1. EXECUTE `npm run dev` TO START A LOCAL DEV SERVER
// 2. EXECUTE `npm test` TO START UNIT TEST

describe('ApiAddUser', function () {
  const client = new HttpClient(serviceProto, {
    server: 'http://127.0.0.1:3000',
    logger: console
  });
 
  console.log('ss');

  it('addUser', async function () {
    let r = await client.callApi('AddUser', { username: 'vaechy', password: '123456',email:'965162422@qq.com'});
    assert.strictEqual(r.isSucc,true)
  })
})
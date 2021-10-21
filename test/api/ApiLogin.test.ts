import assert from 'assert';
import { HttpClient, TsrpcError } from 'tsrpc';
import { serviceProto } from '../../src/shared/protocols/serviceProto';

describe('ApiLogin', function () {
  const client = new HttpClient(serviceProto, {
    server: 'http://127.0.0.1:3000',
    logger: console
  });
 
  console.log('ss');
  
  // it('Succ1', async function () {
  //   let r = await client.callApi('Login', { username:'admin',password:'123456' });
  //   assert.strictEqual(r.isSucc,false)
  // })
  // it('Succ2', async function () {
  //   let r = await client.callApi('Login', {username:'vaechy',password:'123456'});
  //   assert.strictEqual(r.isSucc,true)
  // })
  // it('Succ3', async function () {
  //   let r = await client.callApi('Login', { username:'ggg',password:'123456' });
  //   assert.strictEqual(r.isSucc,false)
  // })
  // it('Succ3', async function () {
  //   let r = await client.callApi('Login', { username:'vaechy',password:'12356' });
  //   assert.strictEqual(r.isSucc,false)
  // })
  it('Succ2', async function () {
    let r = await client.callApi('CmsUserList', {});
    assert.strictEqual(r.isSucc,true)
  })
})
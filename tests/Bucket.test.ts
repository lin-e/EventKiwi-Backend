import { expect } from 'chai';
import Bucket from '../src/Bucket';

describe('AWS', async () => {
  it('accessing _test gives correct response', async () => {
    let params = {
      Bucket: Bucket.bucketName(),
      Key: '_test'
    };
    const data = await Bucket.s3().getObject(params).promise();
    const response = data.Body.toString('utf-8').trim();
    expect(response).equals("accessed!");
  })
});

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Api from '../index';

const mock = new MockAdapter(axios);

jest.mock('../helpers', () => ({
  createConnectionTimeout: jest.fn(),
  isErrorStatus: jest.fn(),
}));

describe('Api class tests', () => {
  let api: Api;

  beforeEach(() => {
    api = new Api();
  });

  it('should call axios get with passed url and get status 200 as response', async () => {
    mock.onGet('www.test.com/get').reply(200);

    const uri = 'www.test.com/get';
    const response = await api.get(uri);

    expect(response.status).toBe(200);
    expect(response.request.responseURL).toBe(uri);
  });
});

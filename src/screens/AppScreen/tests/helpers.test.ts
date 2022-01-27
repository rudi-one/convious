import {mockAppCollection1} from 'src/mocks/mockApps';
import {getScreenShotUrlsObject} from '../helpers';

describe('AppScreen helpers', () => {
  it('should return false', () => {
    expect(getScreenShotUrlsObject(mockAppCollection1)).toEqual([
      {
        url: 'https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/7d/94/dd/7d94ddff-2276-3fc2-65d9-a0e74fc63ce6/a3bfbfa4-3fd7-4391-8bf3-ae9e974acbed_en-US_iPhone_8_Plus_01_trips.png/392x696bb.png',
      },
      {
        url: 'https://is5-ssl.mzstatic.com/image/thumb/Purple116/v4/63/41/7c/63417ccc-524b-7a73-c14e-998f6a3fa86c/ae073f6a-54d2-4acd-88c0-efa787e2fb19_en-US_iPhone_8_Plus_02_itinerary.png/392x696bb.png',
      },
      {
        url: 'https://is2-ssl.mzstatic.com/image/thumb/Purple116/v4/75/a5/cf/75a5cf1a-9ff3-825c-b806-f7780f674d5a/d57c0b4b-12d3-4d72-bfa5-c3cd6f802fb3_en-US_iPhone_8_Plus_03_flightDetails.png/392x696bb.png',
      },
      {
        url: 'https://is3-ssl.mzstatic.com/image/thumb/Purple116/v4/84/9e/a0/849ea0ee-40ea-1738-2d38-f9ffeafc0a29/f38519c9-5af6-443d-9461-b53d7d06b594_en-US_iPhone_8_Plus_04_richNotification.png/392x696bb.png',
      },
    ]);
  });
});

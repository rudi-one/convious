import {render} from '@testing-library/react-native';
import React from 'react';
import {ScreenShotImage} from 'src/components/ScreenShotImage';
import {ScreenShotProp} from 'src/components/ScreenShotImage/types';
import {mockAppCollection1} from 'src/mocks/mockApps';

describe('<ScreenShotImage /> tests', () => {
  it('should match ScreenShotImage component snapshot', () => {
    const screenShot: ScreenShotProp = {
      url: mockAppCollection1.screenshotUrls[0],
    };
    const component = <ScreenShotImage item={screenShot} />;

    expect(render(component)).toMatchSnapshot();
  });
});

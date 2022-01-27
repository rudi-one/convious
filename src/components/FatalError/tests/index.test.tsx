import {render} from '@testing-library/react-native';
import React from 'react';
import {FatalError} from 'src/components/FatalError';

describe('<FatalError /> tests', () => {
  it('should match FatalError component snapshot', () => {
    const component = <FatalError />;

    expect(render(component)).toMatchSnapshot();
  });
});

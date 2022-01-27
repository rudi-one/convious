import {render} from '@testing-library/react-native';
import React from 'react';
import {Loading} from 'src/components/Loading';

describe('<Loading /> tests', () => {
  it('should match Loading component snapshot', () => {
    const component = <Loading />;

    expect(render(component)).toMatchSnapshot();
  });
  it('should match Loading component snapshot with property', () => {
    const component = <Loading mode={'absolute'} />;

    expect(render(component)).toMatchSnapshot();
  });
});

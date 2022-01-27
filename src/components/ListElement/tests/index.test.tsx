import {render} from '@testing-library/react-native';
import React from 'react';
import {ListElement} from 'src/components/ListElement';
import {mockAppCollection1} from 'src/mocks/mockApps';

describe('<ListElement /> tests', () => {
  it('should match ListElement component snapshot', () => {
    const component = (
      <ListElement
        item={mockAppCollection1}
        imageUrl={''}
        navigate={() => {}}
      />
    );

    expect(render(component)).toMatchSnapshot();
  });
});

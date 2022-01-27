import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {SearchBar} from 'src/components/SearchBar';

describe('<SearchBar /> tests', () => {
  it('should match SearchBar component snapshot', () => {
    const component = <SearchBar onSearch={() => {}} />;

    expect(render(component)).toMatchSnapshot();
  });
  it('should call property function when enter query text into search bar', async () => {
    const propFunctionSpy = jest.fn();

    const {getByTestId} = render(<SearchBar onSearch={propFunctionSpy} />);
    const searchQuery = 'uber';

    const input = getByTestId('searchbar');
    fireEvent.changeText(input, searchQuery);

    expect(propFunctionSpy).toBeCalledTimes(1);
  });
});

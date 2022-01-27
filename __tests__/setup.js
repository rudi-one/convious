import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import 'react-native';

function suppressDomErrors() {
  const suppressedErrors =
    /(React does not recognize the.*prop on a DOM element|Unknown event handler property|is using uppercase HTML|Received `.+` for a non-boolean attribute `.+`|The tag.*is unrecognized in this browser|PascalCase|Consider adding an error boundary)/;
  const realConsoleError = console.error;

  console.error = (message, ...rest) => {
    if (message.match(suppressedErrors)) {
      return;
    }

    realConsoleError.apply(console, [message, ...rest]);
  };
}

// This suppresses errors coming from react-native components
// but it may also suppress errors form your code
// if it happens, comment out this function call
suppressDomErrors();

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({adapter: new Adapter()});

// Mocks
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn().mockReturnValue(() => ({
    navigate: jest.fn(),
  })),
  useIsFocused: jest.fn(),
  useFocusEffect: jest.fn(),
  useRoute: jest.fn(),
}));

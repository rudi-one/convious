import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import FatalError from 'src/components/FatalError';
import {RootNavigator} from 'src/navigation/RootNavigator';
import {logJsError} from 'src/utils/helpers';
import {persistor, store} from 'store/store';
import SafeArea from './components/SafeArea';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const Content = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeArea>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeArea>
    </PaperProvider>
  );
};

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={FatalError} onError={logJsError}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Content />
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};
export default App;

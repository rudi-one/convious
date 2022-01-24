import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SafeAreaProvider} from 'react-native-safe-area-view';
import styles from './styles';

const SafeArea: React.FC = ({children}) => (
  <SafeAreaProvider>
    <SafeAreaView
      style={styles.safeAreaStyle}
      edges={['left', 'right', 'bottom', 'top']}>
      {children}
    </SafeAreaView>
  </SafeAreaProvider>
);

export default SafeArea;

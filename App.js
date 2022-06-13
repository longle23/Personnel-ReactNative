import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler'

import RootComponent from './src/view/index'

const App = () => {
  return (
    <RootComponent />
  )
}

export default App;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * npx react-native run-android
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
    <Text style={{ fontSize: 16 }}>The <Text style={{ fontWeight: 'bold' }}>quick brown fox</Text> jumps over the lazy dog</Text>
  </View>
  );
}

export default App;
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
  Image,
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

const image = require('./react-native.jpg');

function App(): JSX.Element {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
    <Text style={{ fontSize: 24, textAlign: 'center' }}>
      Scroll me!
    </Text>
    <View style={{ height: 400, backgroundColor: '#e5e5e5' }}>
      {/* This is our scrollable area */}
      <ScrollView>
        <View style={{ width: 300, height: 300, backgroundColor: 'red' }} />
        <View style={{ width: 300, height: 300, backgroundColor: 'green' }} />
        <View style={{ width: 300, height: 300, backgroundColor: 'blue' }} />
      </ScrollView>
    </View>
  </View>
  );
}

export default App;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * npx react-native run-android
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren}from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button,
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
    const [pressedCount, setPressedCount] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ margin: 16 }}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : 'The button isn\'t pressed yet'
        }
      </Text>
      <Button
        title='Press me'
        onPress={() => null}
      />
    </View>
  );
}

export default App;
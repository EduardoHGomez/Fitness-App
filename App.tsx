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
    const [countdown1, setCountdown1] = useState(10);
  const [countdown2, setCountdown2] = useState(20);

  const handleCountdown1 = () => {
    setCountdown1(countdown1 - 1);
  };

  const handleCountdown2 = () => {
    setCountdown2(countdown2 - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdownContainer}>
        <Button title={`Countdown 1: ${countdown1}`} onPress={handleCountdown1} />
      </View>
      <View style={styles.countdownContainer}>
        <Button title={`Countdown 2: ${countdown2}`} onPress={handleCountdown2} />
      </View>
      <View style={styles.grayBox}></View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    countdownContainer: {
      marginVertical: 10,
    },
    grayBox: {
      width: 200,
      height: 200,
      backgroundColor: 'gray',
    },
});

export default App;
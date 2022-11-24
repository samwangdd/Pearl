import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ScrollWithPanGestureHandler from '@/pages/Animated/components/ScrollWithPanGestureHandler';
// import 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      {/* <Home /> */}
      <ScrollWithPanGestureHandler />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

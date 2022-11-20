import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Marquee from '@/components/Marquee';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text>Open up App.js to start working on your app!!</Text>
      <Marquee
        data={[
          { key: 1, value: 'sdf' },
          { key: 2, value: 'ccc' },
          { key: 3, value: 'wewr' },
          { key: 4, value: 'nn' },
          { key: 5, value: 'yuit' },
        ]}
      />
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

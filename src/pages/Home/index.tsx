/**
 * Home
 * create by wangsen on 2022-11-21
 */
import Marquee from '@/components/Marquee';
import React, { useRef } from 'react';
import { Button, Text, View } from 'react-native';

import styles from './styles';

interface IProps {}

export default function (props: IProps) {
  const {} = props;
  const marQueeRef = useRef();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Marquee
        ref={marQueeRef}
        data={[
          { key: 1, value: '0' },
          { key: 2, value: '1' },
          { key: 3, value: '2' },
          { key: 4, value: '3' },
          { key: 5, value: '4' },
        ]}
      />
      <Button
        title='click me!'
        onPress={() => {
          console.log('marQueeRef', marQueeRef?.current);
        }}
      />
    </View>
  );
}

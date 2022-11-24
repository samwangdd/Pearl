/**
 * Page
 * create by wangsen on 2022-11-24
 */
import React from 'react';
import { Text, useWindowDimensions, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import styles from './styles';

interface IProps {
  title: string;
  index: number;
}

export default function (props: IProps) {
  const { title, index } = props;
  const { width } = useWindowDimensions();

  // move the page to the right
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: index * width }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          ...StyleSheet.absoluteFillObject,
          backgroundColor: `rgba(0,0,256,0.${index + 2})`,
          alignItems: 'center',
          justifyContent: 'center',
        },
        styles.container,
        rStyle,
      ]}
    >
      <Text>{title}</Text>
    </Animated.View>
  );
}

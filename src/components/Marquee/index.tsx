/**
 * Marquee
 * create by wangsen on 2022-11-19
 */
import React, { useImperativeHandle, forwardRef, useEffect, useState } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import useInterval from '@/hooks/useInterval';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import styles from './styles';

interface IData {
  key: string | number;
  value: string;
  component?: React.ReactNode;
}

interface IProps {
  data: IData[];
  interval?: number; // 滚动间隔
  duration?: number; // 滚动动画时长
  reverse?: boolean; // 是否反向滚动
  onIndexChange?: (index: number) => void;
  style?: StyleProp<ViewStyle>;
}

const BASE_HEIGHT = 20;

export default forwardRef((props: IProps, ref) => {
  const { data, duration = 1000, reverse = false } = props;

  const offsetY = useSharedValue(0);
  const idx = useSharedValue(0);
  const [interval, setInterval] = useState(3000);

  useImperativeHandle(ref, () => ({
    active: idx,
    activeItem: data[idx.value],
  }));

  const len = data.length;

  useInterval(() => {
    if (idx.value > len - 1) {
      idx.value = 0;
      offsetY.value = withTiming(0, { duration: 0 });
    } else {
      idx.value += 1;
      offsetY.value = withTiming(idx.value * BASE_HEIGHT, { duration });
    }
  }, interval);

  useEffect(() => {
    if (idx.value > len - 1) {
      setInterval(1000);
    }
  }, [idx.value]);

  const style = useAnimatedStyle(() => {
    console.log('Running on the UI thread');
    return {
      transform: [{ translateY: reverse ? offsetY.value : -offsetY.value }],
    };
  });

  return (
    <View style={styles.marQueeContainer}>
      <Animated.View style={[styles.container, style]}>
        {data.map((item) => (
          <Text key={item.key} style={{ height: BASE_HEIGHT }}>
            {item.value}
          </Text>
        ))}
        <Text key={data[0].key} style={{ height: BASE_HEIGHT }}>
          {data[0].value}
        </Text>
      </Animated.View>
    </View>
  );
});
